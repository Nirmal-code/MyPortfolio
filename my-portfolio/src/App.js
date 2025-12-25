import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Publications from './components/publications/publications';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-24">
        <Home />
        <About />
        <Publications />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
