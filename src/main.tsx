import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './global.css';

import BaseLayout from './layouts/Base.layout.tsx';
import ExplorePage from './pages/Explore.page.tsx';
import HomePage from './pages/Home.page.tsx';
import AboutPage from './pages/About.page.tsx';
import DownloadPage from './pages/Download.page.tsx';
// import ToolsPage from './pages/Tools.page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='sobre' element={<AboutPage />} />
          <Route path='explorar' element={<ExplorePage />} />
          <Route path='baixar' element={<DownloadPage />} />
          {/* <Route path='tools' element={<ToolsPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
