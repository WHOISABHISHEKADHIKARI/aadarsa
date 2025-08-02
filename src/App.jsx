import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Brands from './components/Brands';
import ServicesRedirect from './components/ServicesRedirect';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/brands" element={
          <Layout>
            <Brands />
          </Layout>
        } />
        <Route path="/services" element={<ServicesRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
