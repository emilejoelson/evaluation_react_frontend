import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import BookManagement from './pages/BookManagement';
import { ROUTES } from './core/ROUTES';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element={<BookManagement/>} />
        {ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
