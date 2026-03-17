import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import BottomNavi from './BottomNavi';
import { Toaster } from 'react-hot-toast';

function PageTemple() {
  return (
    <>
      <NavBar />
      <div
        style={{
          marginBottom: '56px',
          marginTop: '56px',
          zIndex: '0',
          textAlign: 'center',
        }}
      >
        <Outlet />
      </div>
      <BottomNavi />
      <Toaster />
    </>
  );
}

export default PageTemple;
