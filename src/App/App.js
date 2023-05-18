import React from 'react';
import './App.css';
import { BrowserRouter, Link , Routes, Route} from "react-router-dom";
import VendingMachine from '../VendingMachine/VendingMachine';
import Candy from '../Candy/Candy';
import Chips from '../Chips/Chips';
import Cookies from '../Cookies/Cookies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<VendingMachine></VendingMachine>}></Route>
        <Route path='/candy' exact element={<Candy></Candy>}></Route>
        <Route path='/chips' exact element={<Chips></Chips>}></Route>
        <Route path='/cookies' exact element={<Cookies></Cookies>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
