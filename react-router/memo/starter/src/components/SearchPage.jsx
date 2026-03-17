import { TextField } from '@mui/material';
import AlignList from './AlignList';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [listData, setListData] = useLocalStorage('listData-key', []);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') || '';

  const filterResult = search
    ? listData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      )
    : null;

  function handleSearch(event) {
    const value = event.target.value;
    setSearchParams({ search: value });
  }

  return (
    <>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={(event) => {
          handleSearch(event);
        }}
        value={search}
      />
      <AlignList filterResult={filterResult} />
    </>
  );
}
export default SearchPage;
