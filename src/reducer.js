
export const initialState={
   user:null,
   playlists:[],
   playing:false,
   item:null,
   discover_weekly:null,
   CurrentPlayingTrack:null,
   url:null,
   description:null,
   MyTopTracks:null,

   token:null
   // token:"BQCrOTE2yKN5VUx1QYLYYo37thTpyLVpyp46_gW2QYum2p9GlG5d6LjIyoXNWvhLlDIv0sYzxZ_6DqEYlY-2iLu-XfS318VnwyHJPkK6U9tPSCqS1y5orSwMeYpoK_QUMyH_csXQqXCcT9lomK42dCtH3oORNsOPKqk6tg06c2cmuy0c"
};
 
export const reducer=(state,action)=>{
   switch(action.type)
   {
       case "SET_USER":return {...state,user:action.username};
       break;
       case "SET_TOKEN":return {...state,token:action.token};
       break;
       case "SET_PLAYLISTS":return {...state,playlists:action.playlists};
       break;
       case "SET_DISCOVER_WEEKLY":return {...state,discover_weekly:action.discover_weekly};
       break;
       case "SET_CurrentPlayingTrack":return {...state,CurrentPlayingTrack:action.CurrentPlayingTrack};
       break;
       case "SET_MyTopTracks":return {...state,MyTopTracks:action.MyTopTracks};
       break;
       case "SET_URL":return {...state,url:action.url};
       break;
       case "SET_DESC":return {...state,description:action.description};
       break;
       default:return state;
   }
};