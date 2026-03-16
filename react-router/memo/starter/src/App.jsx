import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTemple from './components/PageTemple';
import AlignList from './components/AlignList';
import AddPage from './components/AddPage';
import SearchPage from './components/SearchPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTemple />}>
          <Route index element={<AlignList />} />
          <Route path="add" element={<AddPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
