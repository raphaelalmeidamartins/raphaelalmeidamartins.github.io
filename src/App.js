import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
