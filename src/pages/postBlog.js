import React, { Component } from 'react';

import axios from 'axios'


export default class PostBlog extends Component {
    state = {
      title: '',
      author: '',
      createdDate: '',
      image: '',
      content: ''
    }
  
    postBlogHandle = (e) => {
        e.preventDefault();
        this.state.createdDate = new Date()
        this.state.author = "Roshan"
        //console.log('Date: ' + this.state.createdDate)
        console.log(this.state);
        axios.post('http://localhost:4000/blogs',this.state)
        .then(function(response){
        console.log('saved successfully')
      }); 
    }
  
    render() {
      return (
       <div className = "App">
       <div className="container col-md-3">
  
       <form onSubmit={this.postBlogHandle} className="form-signin">
         <h2 className="form-signin-heading">Post blog</h2>
         <div className="form-group">
          <label for="inputTitle" className="sr-only">Title</label>
          <input 
            type="text"
            className="form-control"
            value={this.state.title} 
            onChange={(e) => this.setState({title: e.target.value})} 
            placeholder="Title" 
            required/>
         </div>
         <div className="form-group">
         <label for="inputContent" className="sr-only">Content</label>
         
         <textarea rows = "10" cols = "50"
            type="text" 
            value = {this.state.content}
            onChange={(e) => this.setState({content: e.target.value})}
            className="form-control" 
            placeholder="Content" required/>
         </div>
         
         <button className="btn btn-lg btn-primary btn-block" type="submit">Post</button>
       </form>
        </div>
        </div>
      );
    }
  }
  
  