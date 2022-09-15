import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Prediction from './views/prediction';


function App() {  
  return (
    <div className="App">
      <header>
        <Link to="/">Prediction</Link>
      </header>
      <hr/>
      <Routes>
        <Route path="/" element={<Prediction/>} />
      </Routes>  
      <footer>sadasds</footer>
    </div>
  );
}

export default App;
