import { useMemo } from 'react';
import { useAllLeagues } from '../hooks';
import style from './FilterBySport.module.css';

interface FilterBySportProps {
  search: string;
  filterBy: string | null;
  onFilter(nextSelected: string): void;
}

export function FilterBySport ({ search, filterBy, onFilter }: FilterBySportProps) {
  const { isPending, data } = useAllLeagues(search);

  const sports = useMemo(() => {
    return [...new Set(data?.map((league) => league.strSport))];
  }, [data]);

  return (
    <select
      className={style.root}
      disabled={isPending}
      value={filterBy ?? ''}
      onChange={(e) => onFilter(e.target.value)}
    >
      <option value="">All</option>
      {sports?.map((sport) => (
        <option key={sport} value={sport}>{sport}</option>
      ))} 
    </select>
  );
}
