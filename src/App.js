import React from 'react';
import background from './assets/other-images/scattered-forcefields-dark.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import AppProvider from './context';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
