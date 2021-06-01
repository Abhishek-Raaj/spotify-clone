import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from './DataLayer';
import Player from './Player';
// BQDtOB3z-8Tn5kpBv1pyf-vK6HjIA_auE6W3mSxLWQRjfJvkJihvXnd5mH1kY7BPP_UIyh_aPsSooD1TtTCnlvKEOZimAgh7ExDrGyvwOI-R_veLbNUVqecJn1R50SV3RcsKoMraxiU-ujdKzOKgfFesdjcYyYaOCiGbDbjaCxUtfuP0
const Spotify=new SpotifyWebApi();
function App() {
  const [token,settoken]=useState(null);
  const [state,dispatch]=useDataLayerValue();
  useEffect(() => {
   const _token= getTokenFromUrl();
   window.location.hash="";
  //  console.log("here is the token:",_token.access_token);
   if(_token.access_token)
   {
     
   settoken(_token.access_token);
   dispatch({
    type:"SET_TOKEN",
    token:_token.access_token
  });
   Spotify.setAccessToken(_token.access_token);
   Spotify.getMe().then((user)=>{
     dispatch({
       type:"SET_USER",
       username:user
     });
   });
   Spotify.getUserPlaylists().then((playlists)=>{
       dispatch({
         type:"SET_PLAYLISTS",
         playlists:playlists
       });
   });
  //  state.playlists?.items?.map((item)=>{
  //    console.log("here is my item with id",item.id);
    Spotify.getPlaylist("7CwFIIyFUHFncpDlFznjGM").then((response)=>{
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly:response
      });
    });
    
     Spotify.getMyCurrentPlayingTrack().then((data)=>{
       
       dispatch({
        type:"SET_CurrentPlayingTrack",
        CurrentPlayingTrack:data
      });
     })
     Spotify.getMyTopTracks().then((data)=>{
      //  console.log("here is my top track",data);
      dispatch({
        type:"SET_MyTopTracks",
        MyTopTracks:data
      });
     });
     Spotify.getFeaturedPlaylists().then((data)=>{
      console.log("here is my feature",data);
     });
   }
  //  console.log("here is my state",state);
  }, [])
  return (
    <div className="App">
      {
        (state.token)?(
         <Player Spotify={Spotify}/>
        ):(<Login/>)
      }
    </div>
  );
}

export default App;
