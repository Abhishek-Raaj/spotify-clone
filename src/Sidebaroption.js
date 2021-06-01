import React from 'react'
import './sidebaroption.css';
import {Link,BrowserRouter} from 'react-router-dom';
function Sidebaroption(props) {
    return (
        <div className="sidebaroption">
            {props.icon && <props.icon className="sidebaroption_icon"/>}
            {props.icon?<h4>{props.title}</h4>:<p>{props.title}</p>}
        </div>
    )
}

export default Sidebaroption;
