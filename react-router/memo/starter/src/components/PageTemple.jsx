import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import BottomNavi from '../ui/BottomNavi';

function PageTemple() {
  return (
    <>
      <NavBar />
      <div style={{ marginBottom: '56px', marginTop: '56px', zIndex: '0' }}>
        <Outlet />
      </div>
      <BottomNavi />
    </>
  );
}

export default PageTemple;
