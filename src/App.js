import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Lambo from './components/pages/lambo';
import Bugatti from './components/pages/bugatti';
import Ferrari from './components/pages/ferrari';
import Mclaren from './components/pages/mclaren';
import Koenigsegg from './components/pages/koenigsegg';
import Chat from './components/chat'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/lambo' element={<Lambo />} />
          <Route exact path='/bugatti' element={<Bugatti />} />
          <Route exact path='/ferrari' element={<Ferrari />} />
          <Route exact path='/mclaren' element={<Mclaren />} />
          <Route exact path='/koenigsegg' element={<Koenigsegg />} />
          <Route exact path='/chat' element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;