import './AdminHomepage.css';
import React, { Component } from "react";
import Form from "react-validation/build/form";
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default class AdminHomepage extends Component {
    constructor(props) {
        super(props);
        this.handlePages = this.handlePages.bind(this);
        
        this.state = {
          redirect: null,
          userReady: false,
          currentUser: { username: ""},
          currentTime : new Date().toLocaleString(),
          hour:null,
          image:""
        };
      }
      componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        this.getHour();
        
        this.state.image=AuthService.getUserProfilePicture(currentUser.username);

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true,image:currentUser.image_of_profile });

        this.notify();
      }
      handlePages(e){
        e.preventDefault();

        const currentUser = AuthService.getCurrentUser();
         const map1=currentUser.roles;
         const a=map1.map((role, index) =>{return role;});
         if(a=="ROLE_USER"){
            this.props.history.push("/homeUser");
         }
         else{
            this.props.history.push("/homeAdmin");
         }

      }

      getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
           hour
        });
       }

       notify (){
 
        // Calling toast method by passing string
        toast("Successfully login!")
    }


render() {
  const hour = this.state;
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      const { currentUser } = this.state;
      
        return (
     
            <div className="form5"> 
             
            <div >
              <img className='form-img2' src={currentUser.profileImage} alt='spaceship' >{currentUser.dateOfBirth}</img>
                <Form className="row"
                onSubmit={this.handlePages}
                ref={c => {
                  this.form = c;
                }}>
                
                    <h2 id="headerTitle">Welcome {currentUser.username} <br></br> {hour < 12 ? `Good Morning ` : `Good Evening `}</h2>
                
                    <br></br>
                    <br></br>
                    
                    
                        
                        <button className="button5"
                      
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                       <span>{currentUser.roles &&
                      currentUser.roles.map((role, index) => <p key={index}>{role}</p>)}</span>
                      </button>
                    
                   
                  
                    
                </Form>
                </div>
             </div>
                
          )
      
    
  
               
}
}
  
  