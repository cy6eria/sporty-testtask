import { useAllLeagues } from '../hooks';
import { ListItem } from './ListItem';

import style from './List.module.css';

interface ListProps {
  search: string;
  filterBy: string | null;
  onSelect(league: string): void;
}

export function List ({ search, filterBy, onSelect }: ListProps) {
  const { isPending, data } = useAllLeagues(search, filterBy);

  return (
    <ul className={style.root}>
      <ListItem
        className={style.header}
        strLeague={<b>League</b>}
        strLeagueAlternate={<b>Alternate</b>}
        strSport={<b>Sport</b>}
      />
      {isPending ? <div>Loading...</div> : data?.map((league) => (
        <ListItem
          key={league.idLeague}
          id={league.idLeague}
          strLeague={league.strLeague}
          strLeagueAlternate={league.strLeagueAlternate}
          strSport={league.strSport}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
