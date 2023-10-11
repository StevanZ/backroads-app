import { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Sidebar from './components/Sidebar';
import Tours from './components/Tours';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} />
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
