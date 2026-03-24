import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './style.css';
import ScoreList from './features/score/ScoreList.jsx';
import AppLayout from './AppLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ScoreList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
