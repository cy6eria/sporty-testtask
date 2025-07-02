import { useQuery } from '@tanstack/react-query';

interface League {
  idLeague: string;
  strLeague: string;
  strLeagueAlternate: string;
  strSport: string;
}

export const useAllLeagues = (search: string, filterBy?: string | null) => {
  return useQuery({
    queryKey: ['allLeaguesData'],
    queryFn: async (): Promise<{ leagues: League[] }> => {
      const res = await fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
      return await res.json();
    },
    select: (data) => {
      const searchedLeagues = search ? data.leagues.filter((league) => (
        league.strLeague.toLowerCase().includes(search.toLowerCase()))
        || league.strLeagueAlternate.toLowerCase().includes(search.toLowerCase())
      ) : data.leagues;

      if (filterBy) {
        return searchedLeagues.filter((league) => league.strSport === filterBy);
      }

      return searchedLeagues;
    },
  });
}
