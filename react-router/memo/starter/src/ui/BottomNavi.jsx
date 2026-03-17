import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-use';

export default function BottomNavi() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const path = useLocation().pathname;
  React.useEffect(() => {
    switch (path) {
      case '/':
        setValue(0);
        break;
      case '/add':
        setValue(1);
        break;
      case '/search':
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [path]);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels value={value}>
        <BottomNavigationAction
          label="home"
          icon={<HomeIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="add"
          icon={<AddIcon />}
          onClick={() => navigate('/add')}
        />
        <BottomNavigationAction
          label="search"
          icon={<SearchIcon />}
          onClick={() => navigate('/search')}
        />
      </BottomNavigation>
    </Box>
  );
}
