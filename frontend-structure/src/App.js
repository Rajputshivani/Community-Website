import React, { Component } from 'react';
import './App.css';
import {Route, Switch,Link} from 'react-router-dom';
import AuthorList from './containers/AuthorList';
import Dummy from './containers/DummyList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/dummy" >Dummy Data</Link>
          <Link to="/authors">Authors Data</Link>
        <Switch>
          <Route path="/dummy" exact component={Dummy}/>
          <Route path="/authors" exact component={AuthorList}/>
        </Switch>
      </div>
    );
  }
}

export default App;
