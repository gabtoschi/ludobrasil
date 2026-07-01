import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import './global.css';
import App from './App.tsx';
import BaseLayout from './layouts/Base.layout.tsx';
import ExplorePage from './pages/Explore.page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<App />} />
          <Route path='explorar' element={<ExplorePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
