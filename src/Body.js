import React,{useEffect,useState} from 'react'
import './body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import Topplaylist from './Topplaylist';
import {Switch,Route,useParams, useRouteMatch} from 'react-router-dom';
import Urldesc from './Urldesc';

function Body({Spotify}) {
    const [state, dispatch] =useDataLayerValue() ;
   
    return (
        <div className="body">
            <Header Spotify={Spotify}/>
            <Switch>
                <Route exact path="/playlist/:id">
                        <Urldesc Spotify={Spotify}/>   
        
             </Route>

            <Route exact path="/">
            <div className="body_song">
             <h1>Top Playlists</h1>
             <div className="topplaylist">
                 {state.MyTopTracks?.items.map((item)=>{
                     return(<Topplaylist  item={item}/>);
                 })}
             </div>
            </div>
            </Route>
            </Switch>
        </div>
    )
}

export default Body
