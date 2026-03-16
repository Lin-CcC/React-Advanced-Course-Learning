import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useLocalStorage } from 'react-use';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [listData, setListData] = useLocalStorage('listData-key', []);

  function addList() {
    setListData([...listData, { id: Date.now(), title, body: content }]);
  }

  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        style={{ marginBottom: '10px', marginTop: '10px' }}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
        defaultValue=""
        style={{ marginBottom: '10px' }}
        onChange={(event) => [setContent(event.target.value)]}
      />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          addList();
        }}
      >
        add
      </Button>
    </form>
  );
}
