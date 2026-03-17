import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTemple from './ui/PageTemple';
import AlignList from './align-list/AlignList';
import AddPage from './features/add/AddPage';
import SearchPage from './features/search/SearchPage';
import EditPage from './features/edit/EditPage';
import HomePage from './features/home/homePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AlignList />} />
          <Route path="add" element={<AddPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="memo/:memoId" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
