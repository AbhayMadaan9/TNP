import React, { Component } from 'react'
import '../Components_styling/Genconian_styling.css'
// import '../Javascript_files/Genconians_data_fetching'
import Navbar from './Navbar'
export default class Genconian extends Component {
  genconians = [
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com"
    }
]
 //we will be passing props in state which will change with changing state but not props 
  constructor() { //constructor is used to initialize the state  using this.state by giving this 
    super();  
    this.state = this.genconians,
    loading = false
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="container_genconian">
      <p id='heading_genconian'>Proud Members</p>
      </div>
      </>
    )
  }
}
