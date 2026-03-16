import { TextField } from '@mui/material';
import AlignList from './AlignList';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

function SearchPage() {
  const [search, setSearch] = useState('');
  const [listData] = useLocalStorage('listData-key', []);
  const [searchResult, setSearchResult] = useState(listData);

  useEffect(() => {
    if (search === '') {
      setSearchResult(listData);
    } else {
      const filtered = listData.filter((item) => item.title.includes(search));
      setSearchResult(filtered);
    }
  }, [search, listData]);

  return (
    <>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
      />
      <AlignList searchResult={searchResult} />
    </>
  );
}
export default SearchPage;
