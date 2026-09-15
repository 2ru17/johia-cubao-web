import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Ministries from './pages/Ministries';
import Contact from './pages/Contact';
import Give from './pages/Give';
import Media from './pages/Media';
import Journals from './pages/Journals';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/give" element={<Give />} />
            <Route path="/media" element={<Media />} />
            <Route path="/journals" element={<Journals />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
