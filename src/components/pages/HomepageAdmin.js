import React, { Component } from "react";
import CardItem from "../CardItem";
import "./HomepageAdminCss.css";




export default class HomepageAdmin extends Component {
    render() {        
            return (
                <div className="cards1">
      <h1>Admin Homepage.</h1>
      <div className="cards__container1">
        <div className="cards__wrapper1">
          <ul className="cards__items1">
            
            <CardItem
              src='images/Desktop-Book-HD-Wallpapers.jpg'
              text="View All Books"
              label="Book"
              path="/ViewAllBooks"
            />
               <CardItem
              src='images/Desktop-Book-HD-Wallpapers.jpg'
              text="Search Book"
              label="Book"
              path="/services"
            />
            <CardItem
              src='images/Desktop-Book-HD-Wallpapers.jpg'
              text="Add A Book"
              label="Book"
              path="/addBook"
            />
          </ul>
          <ul className="cards__items1">
            <CardItem
              src='images/futuristic-1628581653437-3273.jpg'
              text="Search Video"
              label="Video"
              path="/services"
            />
             <CardItem
              src='images/futuristic-1628581653437-3273.jpg'
              text="View All Video"
              label="Video"
              path="/services"
            />
            
          
             
             <CardItem
              src='images/futuristic-1628581653437-3273.jpg'
              text="Add a Video"
              label="Video"
              path="/services"
            />
          </ul>
          <ul className="cards__items1">
           
          <CardItem
              src='images/reservation.jpg'
              text="View All Reservations"
              label="Reservation"
              path="/services"
            /> 
              <CardItem
              src='images/contactus.jpg'
              text="Handle Contactus Requests"
              label="ContactUs"
              path="/ViewAllContactUs"
            />  
            <CardItem
              src='images/sht0717Darlington.jpg'
              text="View All Customer Details"
              label="Customer"
              path="/viewAlluserDetails"
            />
          </ul>
          
        </div>
      </div>
    </div>
              )
          
        
      
                   
    }
}

  
  