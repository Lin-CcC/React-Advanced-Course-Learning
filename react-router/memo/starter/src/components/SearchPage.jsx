import { TextField } from '@mui/material';
import AlignList from './AlignList';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

function SearchPage() {
  const [search, setSearch] = useState('');
  const [listData, setListData] = useLocalStorage('listData-key', []);

  const filterResult = search
    ? listData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    : null;

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
      <AlignList searchResult={filterResult} />
    </>
  );
}
export default SearchPage;
