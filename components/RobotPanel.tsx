'use client';

import { useEffect, useState } from 'react';
import { VscCommentDiscussion } from 'react-icons/vsc';

import RobotFigure from '@/components/RobotFigure';
import { useChat } from '@/components/ChatProvider';

import styles from '@/styles/RobotPanel.module.css';

const GREETING = "Hi! 👋 I'm Aneesh's bot. What do you want to know about him?";
const QUICK = ['What has he built?', 'His research', 'Achievements', 'Contact'];

const RobotPanel = () => {
  const { open, ask, isOpen } = useChat();
  const [typed, setTyped] = useState('');
  const [waveKey, setWaveKey] = useState(0);

  useEffect(() => {
    const chars = Array.from(GREETING);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(GREETING);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setTyped(chars.slice(0, i).join(''));
      if (i >= chars.length) window.clearInterval(id);
    }, 32);
    return () => window.clearInterval(id);
  }, []);

  const start = () => {
    setWaveKey((k) => k + 1);
    open();
  };

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <span className={styles.title}>assistant.chat</span>
        <span className={styles.status}>
          <span className={styles.liveDot} />
          {isOpen ? 'chatting' : 'online'}
        </span>
      </div>

      <div className={styles.stage}>
        <div className={styles.bubble} aria-live="polite">
          {typed}
          <span className={styles.caret} aria-hidden />
        </div>

        <button
          type="button"
          className={styles.robot}
          onClick={start}
          aria-label="Open chat with Aneesh's bot"
        >
          <RobotFigure size={150} waveKey={waveKey} />
          <span className={styles.shadow} aria-hidden />
        </button>

        <span className={styles.hint}>Click me to chat</span>
      </div>

      <div className={styles.footer}>
        <div className={styles.quick}>
          {QUICK.map((q) => (
            <button key={q} type="button" className={styles.chip} onClick={() => ask(q)}>
              {q}
            </button>
          ))}
        </div>
        <button type="button" className={styles.fakeInput} onClick={start}>
          <VscCommentDiscussion size={16} />
          Ask me anything, or tell me which page to open…
        </button>
      </div>
    </div>
  );
};

export default RobotPanel;
