import React from 'react'
import './player.css';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {Link,BrowserRouter} from 'react-router-dom';
function Player({Spotify }) {
    return (
        <div className="player">
            <div className="player_body">
            <BrowserRouter>
            {/* sidebar */}
            <Sidebar/>
            {/* body */}
            <Body Spotify={Spotify}/>
            </BrowserRouter>
            </div>
            
            {/* footer */}
            <Footer/>
        </div>
    )
}

export default Player;
