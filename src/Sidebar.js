import React from 'react'
import './sidebar.css';
import {Link,BrowserRouter} from 'react-router-dom';
import Sidebaroption from './Sidebaroption';
import {useDataLayerValue} from './DataLayer';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
function Sidebar() {
    const [state,dispatch]=useDataLayerValue();
    // console.log("here is playlists ,",state.playlists);
    return (
        <div className="sidebar">
            <div className="sidebar_logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ057HBKYGvHGqFSigWBSn_PZFXRsICls11lqrMyp5pxDhgaQ2k35bS7eZzlZ6rUHp7Y_Y&usqp=CAU" alt="image"/>
            <h1>Spotify</h1>
            </div>
            
            <Link to="/">
            <Sidebaroption title="Home" icon={HomeOutlinedIcon}/>
            </Link>
            <Link to="/search">
            <Sidebaroption title="Search" icon={SearchOutlinedIcon} />
            </Link>
            <Link to="/library">
            <Sidebaroption title="Your Library" icon={LibraryMusicOutlinedIcon} />
            </Link>
            <br/>
            <Link to="/create_playlist">
            <Sidebaroption title="Create Playlist" icon={AddBoxRoundedIcon} />
            </Link>
            <Link  to="/liked_song">
            <Sidebaroption title="Liked Songs" icon={FavoriteIcon} />
            </Link>
            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>
            {state.playlists?.items?.map((getUserPlaylists)=>{
                let id=getUserPlaylists.id;
                return(<Link to={`/playlist/${id}`}><Sidebaroption title={getUserPlaylists.name}/></Link>)})}
    
        </div>
        
    );
   
}

export default Sidebar
