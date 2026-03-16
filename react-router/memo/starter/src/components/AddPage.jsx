import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function AddPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <br />
      <Button variant="contained">add</Button>
    </form>
  );
}
