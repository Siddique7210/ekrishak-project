import React from 'react';
import AppRouter from './pages/AppRouter';
import "./App.css";
import Nav_bar from './pages/components/Nav_bar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/components/Footer';
const App = () => {
  return (
    <div>
    <Router>
      <Nav_bar/>
    <Routes> {/* Use Routes instead of Switch */}
      <Route path="/" element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </Router>
  </div>
  );
};

export default App;
