 
import './App.css';
import Home from './Home';
import Putovanja from './Putovanja';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route> 
          <Route path="/putovanja" element={<Putovanja></Putovanja>}></Route> 
       
        </Routes>
      </BrowserRouter>
  );
}

export default App;
