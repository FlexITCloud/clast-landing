import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import './index.css';
import LandingPage from './pages/Landing.tsx';
import VPSDetailPage from './pages/VPS.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/vps" element={<VPSDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
