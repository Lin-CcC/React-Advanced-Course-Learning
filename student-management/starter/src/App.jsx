import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
export function App() {
  return (
    <>
      <div>
        <Toaster position="top-center" />
      </div>
      <Outlet />
    </>
  );
}
export default App;
