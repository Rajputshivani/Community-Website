import React, { Component } from 'react';
import  {connect} from 'react-redux';

import Dummy from '../components/Dummy';
import * as actions from '../store/actions';


class DummyList extends Component{
    componentDidMount(){
        this.props.fetchDummyData();
    }
    render(){
        console.log("inside", this.props.dummyData);
        return (
            <div>
                    <Dummy dummyData={this.props.dummyData} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {
        dummyData:state.dummy.dummyData
    }
}

const mapDispatchToProps = dispatch =>{
    
    return {
        fetchDummyData:()=>dispatch(actions.fetchDummyData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DummyList)