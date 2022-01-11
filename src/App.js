import './App.css'
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Test App</h1>
      <Navbar />
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
