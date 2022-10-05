import React, { Component } from 'react'
import '../Components_styling/post_style.css'
//import axios from 'axios' //This is a http library which returns promise on any type of request like get, post, delete..
export default class Post extends Component {
  // constructor(){
  //   super();
  
  //   this.state = {
  //     type: '',
  //     info: '',
  //     company: '',
  //     location: ''
  //   }
  // }
  //  changehandler = (e)=> { //e is the event passed as the parameter
  //   this.setState({
  //     [e.target.name]: e.target.value // assigning the value on changing the state
  //   })
  //   }
  //   submithandler= (e)=>{
  //     e.preventdefault()   //it avoids page refresh
  //     console.log(this.state)
  //   }
  render() {
    return (
      <>
      <p id='post'>Create Post</p>
      <div className="container_post">
          
          <form method='post' action='/Post'>
              <label htmlFor="">Post type:</label><input type="text" placeholder= 'announcement' name='type'/><br/>
              <label htmlFor="">About Announcement:</label><input type="text" placeholder= 'Regarding anouncement' name='info'/><br/>
              <label htmlFor="">About Company:</label><input type="text" placeholder= 'Name of company..' name='company'/><br/>
              <label htmlFor="">Job Locaion:</label><input type="text" placeholder= 'Location' name='location'/><br/>
              <p><button type='submit'>Submit</button></p>
          </form>
      </div>
      </>
    )
  }
}

