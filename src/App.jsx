import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Process from './components/sections/Process';
import Motivation from './components/sections/Motivation';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Process />
      <Motivation />
      <Services />
      <Stats />
      <Experience />
      <Skills />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;
