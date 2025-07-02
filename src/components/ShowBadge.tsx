import { useQuery } from '@tanstack/react-query';
import styles from './ShowBadge.module.css';

interface Season {
  strBadge: string; 
  strSeason: string;
}

interface ShowBadgeProps {
  selectedLeague: string | null;
  onClose(): void
}

export function ShowBadge ({ selectedLeague, onClose }: ShowBadgeProps) {
  const { isFetching, data } = useQuery({
    queryKey: ['leaguesData', selectedLeague],
    queryFn: async (): Promise<{ seasons: Season[] }> => {
      const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${selectedLeague}`);
      return await res.json();
    },
    select: (data) => {
      return data.seasons?.[0]?.strBadge ? data.seasons[0].strBadge : null;
    },
    enabled: Boolean(selectedLeague),
    staleTime: Infinity,
  });

  if (!selectedLeague) {
    return null;
  }

  return (
    <div className={styles.root} onClick={() => onClose()}>
      <div className={styles.badge}>
        {isFetching ? 'Loading...' : data ? <img src={data} alt={`${selectedLeague} badge`} /> : 'No badge found'}
      </div>
    </div>
  );
}
