import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import { projects_list } from './assets/data/projects_list';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects projects = {projects_list} />
      <Footer />
    </div>
  );
}

export default App;
