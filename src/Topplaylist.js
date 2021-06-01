import React from 'react'
import "./topplaylist.css";
function Topplaylist({item}) {
    return (
        <div className="topplaylist_box">
          <img src={item.album.images[0].url}  alt=""/>
          <p>{item.artists.map((item)=>{
              return item.name;
          }).join(",")}</p>
        </div>
    )
}

export default Topplaylist;
