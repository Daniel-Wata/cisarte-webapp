import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NossaHistoria from './pages/NossaHistoria';
import Atelie from './pages/Atelie';
import AvessoIndustria from './pages/AvessoIndustria';
import Produto from './pages/Produto';
import KitCorporativo from './pages/KitCorporativo';
import Cisarte from './pages/Cisarte';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="/atelie" element={<Atelie />} />
          <Route path="/avesso-industria" element={<AvessoIndustria />} />
          <Route path="/produtos" element={<Produto />} />
          <Route path="/kit-corporativo" element={<KitCorporativo />} />
          <Route path="/cisarte" element={<Cisarte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
