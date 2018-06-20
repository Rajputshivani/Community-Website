import * as actionTypes from './actionTypes';
import axios from '../../axios-api';
export const fetchAuthors = ()=>{
    return dispatch => {
        axios.get("/authors").then(response=>{
           
            dispatch({
                type:actionTypes.FETCH_AUTHORS,
                payload:response.data.authors
            });
        }).catch(error=>{
            dispatch({
                type:actionTypes.FETCH_AUTHORS,
                payload:[]
            });
        });
    }

}