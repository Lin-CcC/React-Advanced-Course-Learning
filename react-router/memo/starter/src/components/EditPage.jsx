import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocalStorage, useLocation } from 'react-use';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function EditPage() {
  const [listData, setListData] = useLocalStorage('listData-key', []);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const state = useLocation();
  const memoId = state.pathname.split('/')[2];
  const navigate = useNavigate();

  function findMemo() {
    listData.map((item) => {
      if (item.id === Number(memoId)) {
        setTitle(item.title);
        setContent(item.body);
      }
    });
  }

  function updateList() {
    const newMemoList = listData.map((item) => {
      if (item.id === Number(memoId)) {
        return {
          ...item,
          title,
          body: content,
        };
      }
      return item;
    });
    setListData(newMemoList);
    navigate('/');
    setTitle('');
    setContent('');
    toast.success('update complete!');
  }

  useEffect(() => {
    findMemo();
  }, [listData, memoId]);

  return (
    <>
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
          style={{ marginBottom: '10px' }}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            updateList();
          }}
        >
          update
        </Button>
      </form>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: 80, right: 16 }}
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </Fab>
    </>
  );
}
export default EditPage;
