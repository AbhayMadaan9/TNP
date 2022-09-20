import React, { Component } from 'react'
import '../Components_styling/Genco_card_styling.css'
export default class Genco_cards extends Component {
        render() {
            return (
                <>
                    <div className="card">
                    <img src={this.props.link} alt="avatar" />
                            <p>{this.props.post}</p>
                            <p>{this.props.about}</p>
                            <ul>
                                <li><a href={this.props.insta}><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href={this.props.fb}><i class="fa-brands fa-facebook"></i></a></li>
                                <li><a href={this.props.mail}><i class="fa-solid fa-envelope"></i></a></li>
                                <li><a href={this.props.lkdin}><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href={this.props.gthb}><i class="fa-brands fa-github"></i> </a></li>
                            </ul>
                    </div>
                </>
            )
        }
    }
