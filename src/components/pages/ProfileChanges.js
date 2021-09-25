import React, { Component } from "react";
import CardItem from "../CardItem";
import AuthService from "../services/auth.service";
import "./HomepageAdminCss.css";




export default class HomepageAdmin extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          redirect: null,
          userReady: false,
          currentUser: { username: ""}
        };
      }
      componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        
    
        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
      }
   

    render() {     
        const { currentUser } = this.state;   
            return (
                <div className="cards1">
      <h1>Hi {currentUser.username}</h1>
      <div className="cards__container1">
        <div className="cards__wrapper1">
            <h2>Profile</h2>
          <ul className="cards__items1">
            
            <CardItem
              src='images/Desktop-Book-HD-Wallpapers.jpg'
              text="Change Profile Picture"
              label="Book"
              path="/profileImage"
            />
               <CardItem
              src='images/Desktop-Book-HD-Wallpapers.jpg'
              text="Change Profile Details"
              label="Book"
              path="/services"
            />
           
          </ul>

          <h2>Reservations</h2>
          <ul className="cards__items1">
            <CardItem
              src='images/futuristic-1628581653437-3273.jpg'
              text="Book Reservations"
              label="Video"
              path="/services"
            />
             <CardItem
              src='images/futuristic-1628581653437-3273.jpg'
              text="Video Reservations"
              label="Video"
              path="/services"
            />
            
         
          </ul>
          <h2>Payments</h2>
          <ul className="cards__items1">
           
          <CardItem
              src='images/reservation.jpg'
              text="Overdue Charges"
              label="Reservation"
              path="/services"
            /> 
              <CardItem
              src='images/contactus.jpg'
              text="Membership Charges"
              label="ContactUs"
              path="/ViewAllContactUs"
            />  
           
          </ul>
          
        </div>
      </div>
    </div>
              )
          
        
      
                   
    }
}

  
  