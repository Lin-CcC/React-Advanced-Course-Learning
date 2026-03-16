import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocalStorage } from 'react-use';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [listData, setListData] = useLocalStorage('listData-key', []);

  function addList() {
    if (title === '' || content === '') {
      toast.error('please fill in the blanks');
      return;
    }
    setListData([...listData, { id: Date.now(), title, body: content }]);
    toast.success('add complete!');
    setTitle('');
    setContent('');
  }

  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        style={{ marginBottom: '10px', marginTop: '10px' }}
        value={title}
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
        value={content}
        onChange={(event) => setContent(event.target.value)}
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
