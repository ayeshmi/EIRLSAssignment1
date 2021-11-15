import React, { Component } from "react";
import Cards from "../Cards";
import CardItem from "../CardItem";
import "./Registrationpage1.css";
import { createMuiTheme } from "@material-ui/core";




export default class Registerpage1 extends Component {

  RegisterPage(name){
    this.props.history.push(`/replyContactUsRequest/${name}`);
}


    render() {
       
          
            return (
                <div className="cards2">
      <h1>Select your user type?</h1>
      <div className="cards__container2">
        <div className="cards__wrapper2">
        
          <ul className="cards__items2">
            
            <CardItem
           
             
              src='images/Bronze-shutterstock_1681180837-700x390.jpg'
              text="Bronze"
              
              text2="Books per user: 3"
              text3="Videos per user: 5"
              
              
              text6="   Book Lending Duration: 3 weeks"
              text7="   Video Lending Duration:5 Days"
              
              text10="Book Lending Charges:50 LKR"
              text11="Video Lending Charges:100 LKR"
              text12="Annual membership fee:1000LKR"
              
              text14="Book Overdue Chargers:20LKR/day"
              text15="Video Overdue Chargers:20LKR/day"
              label="Bronze"
              path="/register/Bronze"
             //action={ () => this.RegisterPage("Bronze")} 
            />
               <CardItem
              src='images/istockphoto-184415150-612x612.jpg'
              text="Silver "
              text2="Books per user: 5"
              text3="Videos per user: 7"
              
              
              text6="   Book Lending Duration: 4 weeks"
              text7="   Video Lending Duration:1 week"
              
              text10="Book Lending Charges:40 LKR"
              text11="Video Lending Charges:80 LKR"
              text12="Annual membership fee:2000LKR"
              
              text14="Book Overdue Chargers:15LKR/day"
              text15="Video Overdue Chargers:15LKR/day"
              label="Silver"
              path="/register/Silver"
            />
             <CardItem
              src='images/istockphoto-497802746-612x612.jpg'
              text="Gold"
              text2="Books per user: 7"
              text3="Videos per user: 9"
              
              
              text6="   Book Lending Duration: 4 weeks"
              text7="   Video Lending Duration:10 Days"
              
              text10="Book Lending Charges:30 LKR"
              text11="Video Lending Charges:60 LKR"
              text12="Annual membership fee:3000LKR"
              
              text14="Book Overdue Chargers:10LKR/day"
              text15="Video Overdue Chargers:10LKR/day"
              label="Gold"
              path="/register/Gold"
            />
            <CardItem
              src='images/istockphoto-1030071582-612x612.jpg'
              label="Platinum"
              path="/register/Platinum"
              text="Platinum"
              text2="Books per user: 10"
              text3="Videos per user: 10"
              
              
              text6="   Book Lending Duration: 5 weeks"
              text7="   Video Lending Duration:1 week"
              
              text10="Book Lending Charges:20 LKR"
              text11="Video Lending Charges:40 LKR"
              text12="Annual membership fee:5000LKR"
              
              text14="Book Overdue Chargers:5LKR/day"
              text15="Video Overdue Chargers:5LKR/day"
            />
              
            </ul>
            
            </div>
        </div>
      
      </div>
    
    
              )
          
        
      
                   
    }
}

  
  