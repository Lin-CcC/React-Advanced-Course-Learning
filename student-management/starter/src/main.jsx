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
import App from './App.jsx';
import Signup from './features/auth/Signup.jsx';
import Login from './features/auth/Login.jsx';
import Info from './features/user/info.jsx';
import ScoreEdit from './features/score/ScoreEdit.jsx';
import StudentEdit from './features/student/StudentEdit.jsx';
import ScoreUpload from './features/score/ScoreUpload.jsx';
import StudentCreate from './features/student/StudentCreate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<AppLayout />}>
            <Route path="" element={<Navigate to="/score" />} />
            <Route path="score">
              <Route path="" element={<ScoreList />} />
              <Route path=":id" element={<ScoreEdit />} />
              <Route path="upload" element={<ScoreUpload />} />
            </Route>
            <Route path="student">
              <Route path="" element={<StudentList />} />
              <Route path=":id" element={<StudentEdit />} />
              <Route path="create" element={<StudentCreate />} />
            </Route>
            <Route path="info" element={<Info />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
