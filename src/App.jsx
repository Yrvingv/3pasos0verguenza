import React from 'react';
import './styles.css';


import Hero from './components/Hero';
import Beneficios from './components/Beneficios';
import Proceso from './components/Proceso';
import Faq from './components/Faq';
import Compra from './components/Compra';
import Footer from './components/Footer';
import Carousel from './components/Carrousel';

function App() {
  return (
    <div className="app">
      <Hero />
      <Beneficios />
      <Proceso />
      <Carousel />
      <Faq />
      <Compra />
      <Footer />
    </div>
  );
}

export default App;