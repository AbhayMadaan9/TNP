import React, { Component } from 'react'
import '../Components_styling/Genconian_styling.css'
// import '../Javascript_files/Genconians_data_fetching'
import Navbar from './Navbar'
import Genco_cards from './Genco_cards'
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
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    },
    {
        "name": "Sachin",
        "post": "Developer",
        "batch": "",
        "about": "She is a B.Tech student in Computer Science and Engineering of 2016-20 batch",
        "fb_id": "https://www.facebook.com/sukhman.kaur.5686",
        "insta_id": "",
        "linkedin_id": "",
        "mail": "sukhman2807@gmail.com",
        "imgurl": ""
    }
]
 //we can pass props in state which will change with changing state but not props 
  constructor() { //constructor is used to initialize the state  using this.state by giving this 
    super();  
    this.state = {
        genco: this.genconians,
        loading: false
    }
  }
  //This is the part of react life cyle this below func. will run after page first renders its content
  //we have made this function asynchrounous becoz. this func. will wait untill the promised inside it is resolved 
  async componentDidMount()
  {
    let url = 'http://localhost:3000/genconians'
    let data = await fetch(url)
    let parsed_data = await data.json
    console.log(parsed_data)  
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="container_genconian">
      <p id='heading_genconian'>Proud Members</p>
      <div className="all_cards">
      {this.state.genco.map((element => {
        return  <Genco_cards link={element.imgurl} post={element.post} about={element.about}/>
      }))}
      </div>
      </div>
      </>
    )
  }
}
