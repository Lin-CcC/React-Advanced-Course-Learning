import List from '@mui/material/List';
import AlignItem from './AlignItem';
import { useLocalStorage } from 'react-use';

export default function AlignList({ filterResult }) {
  // const listData = [
  //   {
  //     Id: 1,
  //     primary: 'Brunch this weekend?',
  //     secondary: "I'll be in your neighborhood doing errands this…",
  //   },
  //   {
  //     Id: 2,
  //     primary: 'Summer BBQ',
  //     secondary: "Wish I could come, but I'm out of town this…",
  //   },
  //   {
  //     Id: 3,
  //     primary: 'Oui Oui',
  //     secondary: 'Do you have Paris recommendations? Have you ever…',
  //   },
  //   {
  //     Id: 111,
  //     primary: 'Brunch this weekend?',
  //     secondary: "I'll be in your neighborhood doing errands this…",
  //   },
  //   {
  //     Id: 222,
  //     primary: 'Summer BBQ',
  //     secondary: "Wish I could come, but I'm out of town this…",
  //   },
  //   {
  //     Id: 333,
  //     primary: 'Oui Oui',
  //     secondary: 'Do you have Paris recommendations? Have you ever…',
  //   },
  //   {
  //     Id: 11,
  //     primary: 'Brunch this weekend?',
  //     secondary: "I'll be in your neighborhood doing errands this…",
  //   },
  //   {
  //     Id: 22,
  //     primary: 'Summer BBQ',
  //     secondary: "Wish I could come, but I'm out of town this…",
  //   },
  //   {
  //     Id: 33,
  //     primary: 'Oui Oui',
  //     secondary: 'Do you have Paris recommendations? Have you ever…',
  //   },
  // ];
  const [listData, setListData] = useLocalStorage('listData-key', []);
  const finalList = filterResult || listData;

  function handleDelete(id) {
    const newList = listData.filter((item) => item.id !== id);
    setListData(newList);
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {finalList.map((item) => {
        return (
          <AlignItem item={item} key={item.id} handleDelete={handleDelete} />
        );
      })}
    </List>
  );
}
