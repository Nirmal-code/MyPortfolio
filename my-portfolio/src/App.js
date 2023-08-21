import './App.css';
import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";
import Home from './components/home/home';

function App() {
  return (
    <div className='w-[100%] t-0 min-h-[100%] fixed'>
        <StarSky
          backgroundColor={[0, 0, 10]}
          isPageBackground={true}
          starColor='white'
          frameRate={100}
        />
        <Home />
    </div>
  );
}

export default App;
