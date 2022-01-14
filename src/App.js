import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Opdracht1 from './Pages/Opdracht1';
import Opdracht2 from './Pages/Opdracht2';
import Counter from './Pages/Counter';
import Searchbar from './Pages/Searchbar';

function App() {
  return (
    <div className="App">
      <h1>Test App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home message='Hello from APP!' />} />
        <Route path="/opdracht1" element={<Opdracht1 />} />
        <Route path="/opdracht2" element={<Opdracht2 />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Searchbar" element={<Searchbar />} />
      </Routes>


    </div>
  );
}

export default App;
