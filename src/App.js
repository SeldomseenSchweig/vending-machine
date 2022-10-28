import React from 'react';
import './App.css';
import Chips from './Chips';
import Chocolate from './Chocolate';
import Cookies from './Cookies';
import NavBar from './NavBar';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';


function App() {


  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
       
        <Route exact path='/cookies'>
          <Cookies />
        </Route>
        <Route exact path='/chocolate'>
          <Chocolate /> 
        </Route>

        <Route exact path='/Chips'>
          <Chips />
        </Route>
      </BrowserRouter>

    </main>
  );
}

export default App;
