import logo from './logo.svg';
import './App.css';
import NintendoCSA from './componentCSA/NintendoCSA'
import {Routes, Route, Link} from 'react-router-dom';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <NintendoCSA/>
    </div>
  );
}

export default App;
