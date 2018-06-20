import * as actionTypes from './actionTypes';

export const fetchDummyData = ()=>{
   
    return dispatch=>{
        return dispatch({type:actionTypes.FETCH_DUMMY_DATA,payload:["1","2","4"]})
    }
}