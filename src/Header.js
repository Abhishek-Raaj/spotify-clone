import React from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useDataLayerValue } from './DataLayer';
function Header(props) {
    const [state, dispatch] = useDataLayerValue()
    console.log("i am in header",state);
   
    return (
        <div className="header">
           <div  className="header_left">
               <SearchIcon/>
               <input placeholder="Search for Artists,Songs,Albums" type="text"/>
           </div>
            <div className="header_right">
  
                <Avatar src={state.user?.images[0].url}   alt={state.user?.display_name}/>
                <h4>{state.user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
