import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import FlightSim from './pages/FlightSim.jsx';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flight-sim" element={<FlightSim />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
