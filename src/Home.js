import React from "react";
import {Link, BrowserRouter, Route } from "react-router-dom";


const Home = () => {
    return (
        <>
<Link exact to='/'><button> Home</button></Link> 
        <BrowserRouter>
             <Route exact path='/'>
         </Route>
     </BrowserRouter>
        </>
    )


}

export default Home;