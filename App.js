import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home';
import NewsItem from './NewsItem'
import AboutUs from './Aboutus'

class App extends Component {
   
    render() {
        return (
            <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/NewsItem" component={NewsItem}/>
                <Route path="/Aboutus" component={AboutUs}/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;