import React, { Component } from 'react';
import './App.css';
// import components


// import containers
import HomeContent from './containers/HomeContent.js';
import Login from './containers/Login.js';
import MainContent from './containers/MainContent.js';
import RoomPage from './containers/roomChat/RoomPage.js';


import {Redirect,Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App layout">
        <Switch>
          <Route path='/room/:id' component={RoomPage}/>
          <Route path='/emeeting' component={MainContent}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={RoomPage}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
