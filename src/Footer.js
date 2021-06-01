import React from 'react'
import './footer.css';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { useDataLayerValue } from './DataLayer';
function Footer() {
    const [state, dispatch] = useDataLayerValue();
    return (
        <div className="footer">
        <div className="footer_left">
            <img className="footer_albumlogo" src={state.CurrentPlayingTrack?.item?.album.images[0].url} alt="image"/>
            <div className="footer_songinfo">
                <h4>{state.CurrentPlayingTrack?.item?.album.name}</h4>
                <p>{state.CurrentPlayingTrack?.item?.artists.map((item)=>{
                    return item.name;
                }).join(",")}</p>
            </div>
        </div>
        <div className="footer_center">
            <ShuffleIcon className="footer_green"/>
            <SkipPreviousOutlinedIcon className="footer_icon"/>
            <PlayCircleFilledWhiteOutlinedIcon fontSize="large" className="footer_icon"/>
            <SkipNextOutlinedIcon className="footer_icon"/>
            <RepeatIcon className="footer_green"/>

        </div>
        <div className="footer_right">
      <Grid container spacing={2}>
      <Grid item>
        <PlaylistPlayIcon/>
        </Grid>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs >
          <Slider  aria-labelledby="continuous-slider"   />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
        </div>

        </div>
    )
}

export default Footer
