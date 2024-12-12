import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
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
