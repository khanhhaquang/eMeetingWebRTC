import React, { Component } from 'react';
// import components
import HomeHeader from '../components/HomeHeader.js';
import Footer from '../components/Footer.js';


// import containers
import HomePage from './homeContainers/HomePage.js';
import Contact from './homeContainers/Contact.js';
import Tutorial from './homeContainers/Tutorial.js';


import {Switch,Route} from 'react-router-dom';

class MainContent extends Component {
    render() {
        return (
            <div style={{minHeight: "100%"}}>
                <HomeHeader/>
                <Switch>
                    <Route path='/tutorial' component={Tutorial}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/' component={HomePage}/>   
                </Switch>
                <div style={{clear: "both"}}></div>
                <Footer/>
            </div>
        );
    }
}

export default MainContent;
