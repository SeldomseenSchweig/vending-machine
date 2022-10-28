import React from "react";
import Home from "./Home";
import './Chocolate.css'

const Chocolate = ()=>{

    return <div className="choco">

        <h1>Chocolate Bar</h1>
        <span className="gif"> <iframe src="https://giphy.com/embed/3otPor4XNPFukjvacU" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></span>
        
        <Home />
    </div>
}

export default Chocolate;