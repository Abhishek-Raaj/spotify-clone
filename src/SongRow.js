import React from 'react'
import './songrow.css';
function SongRow({track}) {
    return (
        <div className="songrow">
            <img className="songrow_album" src={track.album.images[0].url} alt=""/>
            <div className="songrow_info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=>{
                        return artist.name;
                    }).join(",  ") }  { track.album.name}
                 </p>
            </div>
        </div>
    )
}

export default SongRow;
