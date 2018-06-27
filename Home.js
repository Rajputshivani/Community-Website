import React, { Component } from 'react';
import LatestNews from './LatestNews';

const URL_HOME='http://localhost:3002/news'
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            news:''
        }
    }
  
    componentDidMount(){
        fetch(URL_HOME,{method:'GET'})
        .then(response=>response.json())
        .then(json=>{
            this.setState({news:json})
        })
    }
    render() {
        return (
            <div>
                <LatestNews news={this.state.news}/>
              
            </div>
        );
    }
}

export default Home;