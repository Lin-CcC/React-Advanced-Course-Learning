import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function BottomNavi() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
          navigate(['/', '/add', '/search'][newValue]);
        }}
      >
        <BottomNavigationAction label="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="add" icon={<AddIcon />} />
        <BottomNavigationAction label="search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
