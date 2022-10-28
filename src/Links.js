import React from "react";
import {Link, BrowserRouter, Route } from "react-router-dom";
import Chips from './Chips';
import Chocolate from './Chocolate';
import Cookies from './Cookies';
import './Links.css'



const Links = () => {

    return (
        <>
        
        
        <Link exact to='/Cookies'> Cookies</Link> |
        <Link exact to='/Chips'> Chips</Link> |
        <Link exact to='/Chocolate'> Chocolate</Link>

        <div>
            
    <BrowserRouter>
    
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
    </div>

    </>
    


    )

}

export default Links;