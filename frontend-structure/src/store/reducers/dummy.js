import * as actionTypes from '../actions/actionTypes';
import  updateObject  from '../utility';

const initialState = {
    dummyData:[]
};

const fetchDummyData = (state, action)=>{
    return updateObject(state, {error:false,dummyData:action.payload});
}

const reducer = (state=initialState, action)=>{
    switch( action.type){
        case actionTypes.FETCH_DUMMY_DATA:
            return fetchDummyData(state,action);
        default:
            return state;
    }
}

export default reducer;