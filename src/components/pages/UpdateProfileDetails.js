import './UpdateProfileDetails.css';
import React, { Component,useState } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faTimes,faCheck,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


export default class Regsiter extends Component {
  
  constructor(props) {
    
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeBirthDay=this.onChangeBirthDay.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    
    this.state = {
      name:this.props.match.params.name,
      username: "",
      email:"",
      birthday:"",
      password: "",
      loading: false,
      message: "",
      show:false,
      show1:true,
      userID:"",
      currentUser:""
    };
  }



  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  

  onChangeBirthDay(e) {
    this.setState({
      birthday: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  componentDidMount(){
    const user = AuthService.getCurrentUser(); 
    this.state.currentUser=user.username;
    this.state.userID=user.id;
    
   

    AuthService.getUserByID(user.id).then(  (res) =>{
        let book = res.data;
        this.setState({email: book.email,
          username: book.username,
          birthday:book.birthDay
           
        });
    
    });


    
     
}

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });

  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.updateProfile(
        this.state.username,
        this.state.email,
        this.state.birthday,
        this.state.userID
     
        
      ).then(
        
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        this.notify();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            

          this.setState({
            successful: false,
            message: resMessage
          });
          this.notify();
        }
        
      );
      
    
    }
    
  }

  notify (){
 
    // Calling toast method by passing string
    toast.success(this.state.message)
}

render() {
  return (
    
     <div>
       
     <img className='form-img2288'  src={"/images/books-1617327_1920.jpg"} alt='register' /> 
<div className="form288">
        <Form class="row1"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle1">Update Profile Details</h2>
          
            <label >Username</label>
            <Input
           
            placeholder="Enter your username"
              type="text"
           
              name="username"
              value={this.state.username}
              onChange={this.onChangeUsername}
              validations={[required]}
            />
         

         
            <label htmlFor="password">Email</label>
            <Input
            
            placeholder="Enter your email"
              type="text"
              
              name="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              validations={[required]}
              disabled
            />
           

            <label >Birthday</label>
            <Input
           
            placeholder="Enter your birthday"
              type="date"
           
              name="birthday"
              value={this.state.birthday}
              onChange={this.onChangeBirthDay}
              validations={[required]}
            />
           <br></br>

          <div className="form-group">
            <button style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>Update</button>
          </div>
<br></br>

          <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}
          />
        </Form>
        </div>
       </div>
  );
}
}