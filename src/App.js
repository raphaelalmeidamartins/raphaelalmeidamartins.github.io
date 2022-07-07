import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import background from './assets/other-images/scattered-forcefields.svg';

function App() {
  return (
    <>
      <Header />
      <main style={{
        backgroundColor: '#3B0225',
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
