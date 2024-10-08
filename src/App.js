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
import HomePage from './components/Pages/HomePage';
import ImageGallery from './components/Menu/Manu';
import FoodGallery from './components/Menu/FoodGallay';
import MainManu from './components/Menu/MainManu';
import ViewAllManu from './components/Menu/ViewAllManu';
import Appetizere from './components/Menu/ViewAllManu/Appetizere';
import Service from './components/Service/Service';
import Special from './components/Menu/Special';

const App = () => {
  return (
    <Router>
      <Header />
    
      <div style={{marginTop: '80px'}}></div>
      {/* <ViewAllManu /> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/service" element={<Service />} />
        <Route path="/special" element={<Special />} />
        <Route path="/service" element={<Service />} />

        {/* main pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/main-manu" element={<MainManu />} />
        <Route path="/appetizere" element={<Appetizere />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;

