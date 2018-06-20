import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';
const initialState = {
    authors:[]
}
const fetchAuthor = (state=initialState, action)=>{
            return updateObject(state,{authors:action.payload});
           
}

const fetchAuthorFailed = (state, action)=>{
    return updateObject(state,{error:true});
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_AUTHORS:
            return fetchAuthor(state,action);
        default:
            return state;
    }
}

export default reducer;