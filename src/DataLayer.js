import React, { createContext,useContext,useReducer } from 'react'

export const DataLayerContext=createContext();
const DataLayer=({reducer,initialState,children})=> {
    return(
       <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
                {children}
       </DataLayerContext.Provider> );
}

export default DataLayer;
export const useDataLayerValue=()=>useContext(DataLayerContext);