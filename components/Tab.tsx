'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from '@/styles/Tab.module.css';

interface TabProps {
  icon: string;
  filename: string;
  path: string;
}

const Tab = ({ icon, filename, path }: TabProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  const ref = useRef<HTMLDivElement>(null);

  // On narrow screens the tab bar scrolls; keep the open page's tab visible.
  useEffect(() => {
    if (isActive) ref.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [isActive]);

  return (
    <Link href={path}>
      <div ref={ref} className={`${styles.tab} ${isActive ? styles.active : ''}`}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
