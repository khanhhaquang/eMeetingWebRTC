import React, { Component } from 'react';
import './App.css';
// import components


// import containers
import HomeContent from './containers/HomeContent.js';
import Login from './containers/Login.js';
import MainContent from './containers/MainContent.js';
import RoomPage from './containers/roomChat/RoomPage.js';

import {Provider} from 'react-redux';
import store from './store.js';


import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App layout">
        <Switch>
          <Route path='/room/:id' component={RoomPage}/>
          <Route path='/emeeting' component={MainContent}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={HomeContent}/> 
        </Switch>
      </div>
      </Provider>
    );
  }
}

export default App;
