import type { ReactNode } from 'react';

import style from './Layout.module.css';

interface LayoutProps {
  panel: ReactNode;
  children: ReactNode;
}

export function Layout ({ panel, children }: LayoutProps) {
  return (
    <div className={style.root}>
      <div className={style.panel}>{panel}</div>
      <div>{children}</div>
    </div>
  );
}
