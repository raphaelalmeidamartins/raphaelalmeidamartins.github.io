import React from 'react';
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
      <main
        style={{
          backgroundColor: '#011921',
          backgroundImage:
            'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' xmlns:svgjs=\'http://svgjs.com/svgjs\' width=\'1440\' height=\'560\' preserveAspectRatio=\'none\' viewBox=\'0 0 1440 560\'%3e%3cg clip-path=\'url(%26quot%3b%23SvgjsClipPath1283%26quot%3b)\' fill=\'none\'%3e%3ccircle r=\'55.915\' cx=\'611.78\' cy=\'168.62\' fill=\'url(%23SvgjsLinearGradient1284)\'%3e%3c/circle%3e%3ccircle r=\'26.93\' cx=\'402.06\' cy=\'513.46\' fill=\'%2343468b\'%3e%3c/circle%3e%3ccircle r=\'19.625\' cx=\'120.23\' cy=\'243.13\' fill=\'url(%23SvgjsLinearGradient1285)\'%3e%3c/circle%3e%3ccircle r=\'50.54\' cx=\'12.66\' cy=\'342.1\' fill=\'url(%23SvgjsLinearGradient1286)\'%3e%3c/circle%3e%3ccircle r=\'37.25\' cx=\'1041.27\' cy=\'537.11\' fill=\'url(%23SvgjsLinearGradient1287)\'%3e%3c/circle%3e%3ccircle r=\'33.855\' cx=\'983.1\' cy=\'99.19\' fill=\'%2343468b\'%3e%3c/circle%3e%3ccircle r=\'46.335\' cx=\'548.85\' cy=\'28.88\' fill=\'url(%23SvgjsLinearGradient1288)\'%3e%3c/circle%3e%3ccircle r=\'29.15\' cx=\'723.92\' cy=\'168.02\' fill=\'url(%23SvgjsLinearGradient1289)\'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id=\'SvgjsClipPath1283\'%3e%3crect width=\'1440\' height=\'560\' x=\'0\' y=\'0\'%3e%3c/rect%3e%3c/clipPath%3e%3clinearGradient x1=\'499.95\' y1=\'168.62\' x2=\'723.61\' y2=\'168.62\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1284\'%3e%3cstop stop-color=\'%23f29b7c\' offset=\'0.1\'%3e%3c/stop%3e%3cstop stop-color=\'%237e6286\' offset=\'0.9\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'80.98\' y1=\'243.13\' x2=\'159.48000000000002\' y2=\'243.13\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1285\'%3e%3cstop stop-color=\'%2384b6e0\' offset=\'0.1\'%3e%3c/stop%3e%3cstop stop-color=\'%23464a8f\' offset=\'0.9\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'-88.42\' y1=\'342.1\' x2=\'113.74\' y2=\'342.1\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1286\'%3e%3cstop stop-color=\'%23e298de\' offset=\'0.1\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(71%2c 68%2c 142%2c 1)\' offset=\'0.9\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'966.77\' y1=\'537.11\' x2=\'1115.77\' y2=\'537.11\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1287\'%3e%3cstop stop-color=\'%23f29b7c\' offset=\'0.1\'%3e%3c/stop%3e%3cstop stop-color=\'%237e6286\' offset=\'0.9\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'456.18\' y1=\'28.879999999999995\' x2=\'641.52\' y2=\'28.879999999999995\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1288\'%3e%3cstop stop-color=\'%23f29b7c\' offset=\'0.1\'%3e%3c/stop%3e%3cstop stop-color=\'%237e6286\' offset=\'0.9\'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1=\'665.62\' y1=\'168.02\' x2=\'782.22\' y2=\'168.02\' gradientUnits=\'userSpaceOnUse\' id=\'SvgjsLinearGradient1289\'%3e%3cstop stop-color=\'%23e298de\' offset=\'0.1\'%3e%3c/stop%3e%3cstop stop-color=\'rgba(71%2c 68%2c 142%2c 1)\' offset=\'0.9\'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
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
