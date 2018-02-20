import React, { Component } from 'react';

import axios from 'axios'

export default class Form extends Component {
  state = {
    fullName: 'Roshan Bade',
    email: 'roshan@fusemachines.com',
    company: 'Fusemachines Nepal',
    username: 'roshan',
    password: 'roshan123'
  }

  signUpHandle = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:4000/profiles',this.state)
    .then(function(response){
    console.log('saved successfully')
  }); 
  }
  render() {
    return (
     <div className = "App">
     <div className="container col-md-3">

     <form onSubmit={this.signUpHandle} className="form-signin">
       <h2 className="form-signin-heading">Sign Up</h2>
       <div className="form-group">
        <label for="inputName" className="sr-only">Full Name</label>
        <input 
          type="text"
          className="form-control"
          value={this.state.fullName} 
          onChange={(e) => this.setState({fullName: e.target.value})} 
          placeholder="Full Name" 
          required/>
       </div>
       <div className="form-group">
       <label for="inpputEmail" className="sr-only">Email</label>
       <input 
          type="email" 
          value = {this.state.email}
          onChange={(e) => this.setState({email: e.target.value})}
          className="form-control" 
          placeholder="Email" required/>
       </div>
       <div className="form-group">
       <label for="inputCompany" className="sr-only">Company</label>
       <input 
          type="text" 
          id="inputCompany" 
          value = {this.state.company}
          onChange = {(e) => this.setState({company: e.target.value})}
          className="form-control" 
          placeholder="Company" required/>
       </div>
       <div className="form-group">
       <label for="inputuserName" className="sr-only">UserName</label>
       <input 
          type="text" 
          id="inputUserName"
          value = {this.state.username}
          onChange = {(e) => this.setState({username: e.target.value})} 
          className="form-control" 
          placeholder="UserName" required/>
       </div>
       <div className="form-group">
       <label for="inputPassword" className="sr-only">Password</label>
       <input 
          type="password" 
          id="inputPassword" 
          value = {this.state.password}
          onChange = {(e) => this.setState({password: e.target.value})}
          className="form-control" 
          placeholder="Password" required/>
       </div>
       <button className="btn btn-lg btn-primary btn-block" type="submit">Signup</button>
     </form>
      </div>
      <div className = "col-md-3" className="text-center">
        <h3>Already have an account?</h3><br/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </div>
      </div>
    );
  }
}