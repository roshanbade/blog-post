import React, { Component } from 'react';

import axios from 'axios'

export default class Login extends Component {

    state = {
      userName:'s',
      password:'s'
    }
  
    signInHandle = (e) => {
      e.preventDefault();
      console.log('hello');
      console.log(this.state);
      axios.post('http://localhost:4000/login',this.state)
        .then(function(response){
            console.log(response)
            window.location.href='/';
            localStorage.setItem('userInfo','1')
        })
        .catch(err =>{
            alert(err.message);
        })
        
      //axios.post('http://localhost:4000/profiles',this.state)
      //.then(function(response){
  //console.log('saved successfully')
   // }); 
    }
  
    render(){
      return(
        <div>
        <div className="container col-md-3">
  
        <form onSubmit={this.signInHandle} className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <div className="form-group">
            <label for="inputUserName" className="sr-only">Email address</label>
            <input 
              type="text" 
              value = {this.state.userName}
              onChange = {(e) => this.setState({userName: e.target.value})}
              className="form-control" 
              placeholder="Username" 
              required/>
          </div>
  
          <div className="form-group">
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" 
              value = {this.state.password}
              onChange = {(e) => this.setState({password: e.target.value})}
              className="form-control" 
              placeholder="Password" 
              required/>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
   
      </div>
        </div>
      )
    }
  }