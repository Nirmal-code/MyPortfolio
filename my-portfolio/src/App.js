import './App.css';
import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";

import Navbar from './components/navbar/navbar'
import Home from './components/home/home';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className='w-[100%] t-0 min-h-[100%] overflow-auto'>
        <StarSky
          backgroundColor={[0, 0, 10]}
          isPageBackground={true}
          starColor='white'
          frameRate={100}
        />
        <Home />
        <About />
        <Navbar />
        <Experience />
        <Projects />
        <Footer />

    </div>
  );
}

export default App;
