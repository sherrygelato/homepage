import React from 'react';

import styles from './App.module.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/organisms/navbar/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Resume from './pages/resume/resume';
import Contact from './pages/contact/contact';
import Footer from './components/organisms/footer/footer'

function App() {
  return (
    <div className={styles.app}>
      <Router basename="/homepage">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
