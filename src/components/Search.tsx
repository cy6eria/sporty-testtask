interface SearchProps {
  search: string;
  onSearch(nextSearch: string): void;
}

export function Search ({ search, onSearch }: SearchProps) {
  return (
    <input
      type="search"
      placeholder="Search..."
      value={search} onChange={(e) => onSearch(e.target.value)}
    />
  );
}
