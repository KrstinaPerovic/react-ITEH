 
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import ONama from './Onama';
import Putovanja from './Putovanja';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

function App() {
  
  return (
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route> 
          <Route path="/putovanja" element={<Putovanja></Putovanja>}></Route> 
          <Route path="/onama" element={<ONama></ONama>}></Route> 
         
       
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
