import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Layout, Search, List, FilterBySport, ShowBadge } from './components';

const queryClient = new QueryClient();

function App() {
  const [selectedLeague, setSelectedLeague] = useState<string|null>(null);
  const [filterState, setFilterState] = useState<{ search: string, filterBy: string | null }>({
    search: '',
    filterBy: null,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Layout panel={(
        <>
          <Search
            search={filterState.search}
            onSearch={(nextSearch: string) => setFilterState((state) => ({ ...state, search: nextSearch }))}
          />
          
          <FilterBySport
            search={filterState.search}
            filterBy={filterState.filterBy}
            onFilter={(nextFilterBy: string) => setFilterState((state) => ({ ...state, filterBy: nextFilterBy }))}
          />
        </>
      )}>
        <List
          search={filterState.search}
          filterBy={filterState.filterBy}
          onSelect={setSelectedLeague}
        />

        <ShowBadge selectedLeague={selectedLeague} onClose={() => setSelectedLeague(null)} />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
