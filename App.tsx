import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Exhibitions from './components/Exhibitions';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full bg-[#050505] text-white min-h-screen selection:bg-[#FFCC00] selection:text-black">
      <Navigation />
      <Hero />
      <Marquee text="Editing // Motion // Color // Sound" />
      <Portfolio />
      <About />
      <Exhibitions />
      <Footer />
    </main>
  );
}

export default App;