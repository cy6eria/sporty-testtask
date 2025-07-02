import type { ReactNode } from 'react';
import cx from 'classnames';

import style from './ListItem.module.css';

interface ListItemProps {
  className?: string;
  id?: string;
  strLeague: ReactNode;
  strLeagueAlternate: ReactNode;
  strSport: ReactNode;
  onSelect?(league?: string): void;
}

export function ListItem ({ className, id, strLeague, strLeagueAlternate, strSport, onSelect }: ListItemProps) {
  return (
    <li className={cx(style.root, className)} onClick={() => onSelect?.(id)} role="button">
      <div>{strLeague}</div>
      <div>{strLeagueAlternate}</div>
      <div>{strSport}</div>
    </li>
  );
}
