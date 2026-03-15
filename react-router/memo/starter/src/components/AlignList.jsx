import List from '@mui/material/List';
import AlignItem from '../ui/AlignItem';

export default function AlignList() {
  const listData = [
    {
      Id: 1,
      primary: 'Brunch this weekend?',
      secondary: "I'll be in your neighborhood doing errands this…",
    },
    {
      Id: 2,
      primary: 'Summer BBQ',
      secondary: "Wish I could come, but I'm out of town this…",
    },
    {
      Id: 3,
      primary: 'Oui Oui',
      secondary: 'Do you have Paris recommendations? Have you ever…',
    },
    {
      Id: 111,
      primary: 'Brunch this weekend?',
      secondary: "I'll be in your neighborhood doing errands this…",
    },
    {
      Id: 222,
      primary: 'Summer BBQ',
      secondary: "Wish I could come, but I'm out of town this…",
    },
    {
      Id: 333,
      primary: 'Oui Oui',
      secondary: 'Do you have Paris recommendations? Have you ever…',
    },
    {
      Id: 11,
      primary: 'Brunch this weekend?',
      secondary: "I'll be in your neighborhood doing errands this…",
    },
    {
      Id: 22,
      primary: 'Summer BBQ',
      secondary: "Wish I could come, but I'm out of town this…",
    },
    {
      Id: 33,
      primary: 'Oui Oui',
      secondary: 'Do you have Paris recommendations? Have you ever…',
    },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {listData.map((item) => {
        return <AlignItem item={item} key={item.Id} />;
      })}
    </List>
  );
}
