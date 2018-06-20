import React, { Component } from 'react';
import  {connect} from 'react-redux';
import * as actions from '../store/actions';

import Authors from '../components/Authors';

class AuthorList extends Component{
   componentDidMount(){
       this.props.fetchAuthors();
   }
    render(){
        console.log("this.props.authors",this.props.authors);
        return (
            <div>
                    <Authors authors={this.props.authors} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log("state",state)
    return {
        authors:state.author.authors
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchAuthors:()=>dispatch(actions.fetchAuthors())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorList)