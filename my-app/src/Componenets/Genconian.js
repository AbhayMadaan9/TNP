import React, { Component } from 'react'
import '../Components_styling/Genconian_styling.css'
// import '../Javascript_files/Genconians_data_fetching'
import Navbar from './Navbar'
import Genco_cards from './Genco_cards'
import Spinner from './Spinner';
let current_page_limit = 6;
let prev_current_page_limit = 0;
export default class Genconian extends Component {
 //we can pass props in state which will change with changing state but not props 
  constructor() { //constructor is used to initialize the state  using this.state by giving this 
    super();  
    this.state = {
        genco: [],
        loading: false,
    }
  }
  //This is the part of react life cyle this below func. will run after page first renders its content
  //we have made this function asynchrounous becoz. this func. will wait untill the promised inside it is resolved 
  async componentDidMount()
  {
    let url = `http://localhost:8000/genconians/` //this is my restapi created using json-server
    this.setState({loading:true})
    let data = await fetch(url)
    let parsed_data = await data.json()
    this.setState({genco: parsed_data, loading: false})
  }
  render() {
    return (
      <>
      <Navbar/>
      <div className="container_genconian">
      <p id='heading_genconian'>Proud Members</p>
      <div className="all_cards">
      {this.state.genco.map((element => {
        return  <Genco_cards link={element.imgurl?element.imgurl:"https://hybridirc.com/images/staff/avatar7.png"} post={element.post} about={element.about}/>
      }))}
      </div>
      
        {this.state.loading &&<Spinner/>}
      </div>
      </>
    )
  }
}
