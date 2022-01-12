import './App.css'
// import { Routes} from 'react-router-dom';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import Navbar from './Components/Navbar/Navbar';
import CountButton from './Components/CountButton/CountButton'

function App() {
  return (
    <div className="App">
      <h1>Test App</h1>
      <Navbar />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/opdracht1" element={<Opdracht1 />} /> */}
        {/* <Route path="/opdracht2" element={<Opdracht2 />} /> */}
      {/* </Routes> */}
      <ClassComponent />
      <FunctionalComponent />
      <CountButton incrementBy={1}/>
      <CountButton incrementBy={5}/>
    </div>
  );
}

export default App;
