import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import ToolBar from './ui/ToolBar';
import { useLocation } from 'react-use';
function AppLayout() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      {(location.pathname === '/score' || location.pathname === '/student') && (
        <ToolBar />
      )}
      <Outlet />
    </>
  );
}
export default AppLayout;
