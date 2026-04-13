import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import ToolBar from './ui/ToolBar';
function AppLayout() {
  return (
    <>
      <NavBar />
      <ToolBar />
      <Outlet />
    </>
  );
}
export default AppLayout;
