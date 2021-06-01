
import { useDataLayerValue } from './DataLayer';
import React,{useEffect,useState} from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import {Switch,Route,useParams, useRouteMatch} from 'react-router-dom';
function Urldesc({Spotify}) {
        let {id}=useParams();
       
        const [state, dispatch] =useDataLayerValue() ;
        const [Url,setUrl]=useState("");
        const [Desc,setdesc]=useState("");
        const [track,settrack]=useState([]);
    // useEffect(() => {
    Spotify.getPlaylist(id).then((response)=>{
        console.log("here is song",response);
        settrack(response.tracks.items);
        console.log("here is track",track);
        // dispatch({
        //     type:"SET_URL",
        //     url:response.images[0].url
        //   });
        // dispatch({
        //     type:"SET_DESC",
        //     description:response.description
        //   });
          
        // console.log("playlist",response);
        //  src=response.images[0].url;
        //  description=response.description;
        //  console.log("description",src);
        //  seturl(src); 
        setdesc(response.description);
        setUrl(response.images[0].url);

     }).catch((error)=>{
         alert("too many request"); 
     });
    //  },[state])     
    return (
        <div className="body_info">
        <img src={Url} alt="image"/>
        <div className="body_infotext">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{Desc}</p>
        </div>
        <div className="body_icons">
             <PlayCircleFilledIcon className="body_shuffle" fontSize="large"/>
             <FavoriteIcon/>
             <MoreHorizIcon/>
             </div>
              <div>
             { track.map((item)=>{
                 return(<SongRow track={item.track}/>) 
                 })
            }
             </div>
        </div>
    );
}

export default Urldesc;
