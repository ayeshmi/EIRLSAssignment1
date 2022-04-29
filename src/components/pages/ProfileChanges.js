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
              src='https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg'
              text="Change Profile Picture"
              label="Profile"
              path="/profileImage"
            
            />
               <CardItem
              src='https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg'
              text="Change Profile Details"
              label="Profile"
              path="/updateProfileDetails"
            />
           
          </ul>

        
          
          
          
        </div>
      </div>
    </div>
              )
          
        
      
                   
    }
}

  
  