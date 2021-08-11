import './AdminHomepage.css';
import React, { Component } from "react";
import Form from "react-validation/build/form";
import AuthService from "../services/auth.service";
import { Redirect } from "react-router-dom";



export default class AdminHomepage extends Component {
    constructor(props) {
        super(props);
        this.handlePages = this.handlePages.bind(this);
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

render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      const { currentUser } = this.state;
      
        return (
     
            <div className="form5"> 
             
            <div >
              <img className='form-img2' src='images/pexels-lina-kivaka-1741231.jpg' alt='spaceship' />
                <Form className="row"
                onSubmit={this.handlePages}
                ref={c => {
                  this.form = c;
                }}>
                
                    <h2 id="headerTitle">Welcome {currentUser.username}</h2>
                    <h2>Good morning!</h2>
                    <br></br>
                    <br></br>
                    
                    <h3>User Id      :{currentUser.id}
                    <br></br>
                    <br></br>
                    Email Address:{currentUser.email}</h3>
                        
                        <button className="button5"
                      
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                       <span>{currentUser.roles &&
                      currentUser.roles.map((role, index) => <p key={index}>{role}</p>)}Login</span>
                      </button>
                    
                   
                  
                    
                </Form>
                </div>
             </div>
                
          )
      
    
  
               
}
}
  
  