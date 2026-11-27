'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { VscClose, VscSend, VscLinkExternal, VscArrowRight } from 'react-icons/vsc';

import RobotFigure from '@/components/RobotFigure';
import { getReply, GREETING, SUGGESTIONS, type ChatLink } from '@/lib/chatbot';

import styles from '@/styles/Chat.module.css';

interface Message {
  id: number;
  from: 'bot' | 'user';
  text: string;
  links?: ChatLink[];
}

interface ChatContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  ask: (question: string) => void;
}

const ChatContext = createContext<ChatContextValue | null>(null);

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat must be used inside ChatProvider');
  return ctx;
};

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: 'bot', text: GREETING.text },
  ]);
  const nextId = useRef(1);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timers = useRef<number[]>([]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const ask = useCallback(
    (question: string) => {
      const q = question.trim();
      if (!q) return;
      setIsOpen(true);
      setMessages((m) => [...m, { id: nextId.current++, from: 'user', text: q }]);
      setTyping(true);

      const reply = getReply(q);
      const t1 = window.setTimeout(() => {
        setTyping(false);
        setMessages((m) => [
          ...m,
          { id: nextId.current++, from: 'bot', text: reply.text, links: reply.links },
        ]);
        if (reply.navigate) {
          const target = reply.navigate;
          const t2 = window.setTimeout(() => router.push(target), 450);
          timers.current.push(t2);
        }
      }, 550);
      timers.current.push(t1);
    },
    [router]
  );

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(draft);
    setDraft('');
  };

  const followLink = (href: string) => {
    if (href.startsWith('/')) router.push(href);
  };

  return (
    <ChatContext.Provider value={{ isOpen, open, close, ask }}>
      {children}

      {isOpen && (
        <section className={styles.window} role="dialog" aria-label="Chat with Aneesh's bot">
          <header className={styles.header}>
            <RobotFigure size={30} />
            <div className={styles.headerText}>
              <span className={styles.headerTitle}>Aneesh&apos;s bot</span>
              <span className={styles.headerStatus}>
                <span className={styles.onlineDot} /> online · answers from his real work
              </span>
            </div>
            <button type="button" className={styles.iconButton} onClick={close} aria-label="Close chat">
              <VscClose size={18} />
            </button>
          </header>

          <div ref={listRef} className={styles.messages}>
            {messages.map((m) => (
              <div key={m.id} className={m.from === 'bot' ? styles.botRow : styles.userRow}>
                <div className={m.from === 'bot' ? styles.botBubble : styles.userBubble}>
                  {m.text}
                  {m.links && (
                    <div className={styles.links}>
                      {m.links.map((l) =>
                        l.href.startsWith('/') ? (
                          <button
                            key={l.href}
                            type="button"
                            className={styles.linkChip}
                            onClick={() => followLink(l.href)}
                          >
                            {l.label} <VscArrowRight size={12} />
                          </button>
                        ) : (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkChip}
                          >
                            {l.label} <VscLinkExternal size={11} />
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className={styles.botRow}>
                <div className={`${styles.botBubble} ${styles.typing}`} aria-label="Bot is typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <div className={styles.suggestions}>
            {SUGGESTIONS.map((s) => (
              <button key={s} type="button" className={styles.suggestion} onClick={() => ask(s)}>
                {s}
              </button>
            ))}
          </div>

          <form className={styles.inputRow} onSubmit={submit}>
            <input
              ref={inputRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about projects, research, skills…"
              className={styles.input}
              aria-label="Message"
              autoComplete="off"
            />
            <button type="submit" className={styles.send} aria-label="Send" disabled={!draft.trim()}>
              <VscSend size={16} />
            </button>
          </form>
        </section>
      )}

      {!isOpen && pathname !== '/' && (
        <button type="button" className={styles.launcher} onClick={open} aria-label="Chat with Aneesh's bot">
          <RobotFigure size={34} />
        </button>
      )}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
