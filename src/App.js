import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route, Router} from 'react-router-dom';
import Login from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/home'
import PostBlog from './pages/postBlog'

class App extends Component {
  render(){

    return(
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/postBlog" component={PostBlog}/> 
      </Switch>
    )
  }
}

export default App;
