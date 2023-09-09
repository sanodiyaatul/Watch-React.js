import React, { useState } from "react";
import styles from "./styles.css";

export default function App(){

    let now = new Date().toLocaleDateString();
    const[time, setTime] = useState(now);

    function update(){
        let newTime= new Date().toLocaleTimeString();
        setTime(newTime)
    }
    return(
        <div>
        <div className="div">
            <h1 className="h">{time}</h1>
            <button className="btn" onClick={update}>Refresh</button>
        </div>
        <div id="footer">
            Copyrights © {new Date().getFullYear()} reserverd to Atul Sanodiya
        </div>
        </div>
        
    )
}