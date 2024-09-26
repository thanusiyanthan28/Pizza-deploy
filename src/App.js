import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header'; 
import Home from '../src/components/Home/Home'; // Assuming Home component is imported
import About from './components/About/About';
import HomeSlide from './components/Home/HomeSlide';
import Faq from './components/Faq/Faq';
import Download from './components/Download/Download';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{marginTop: '80px'}}></div>
      {/* <AboutSlide /> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;

