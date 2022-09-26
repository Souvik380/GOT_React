import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import Families from './Components/Families';
import Characters from './Components/Characters';


function App() {
  return (
    <div className="App">
      <Heading />
      <Families />
      <Characters />
    </div>
  );
}

export default App;
