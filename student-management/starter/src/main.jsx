import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import ScoreList from './features/score/ScoreList.jsx';
import AppLayout from './AppLayout.jsx';
import StudentList from './features/student/StudentLIst.jsx';

import './style.css';
import { Navigate } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Navigate to="/score" />} />
          <Route path="score" element={<ScoreList />} />
          <Route path="student" element={<StudentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
