import './Login.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
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

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
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
      AuthService.checking(this.state.username, this.state.password).then(
        () => {
         
       
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
              if(resMessage=="Request failed with status code 401"){
                this.setState({
                  loading: false,
                  message: "Username or Password is incorrect, Check again"
                });
                this.notify();
              }else{
                this.setState({
                  loading: false,
                  message: resMessage
                });
                this.notify();
              }
          
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  notify (){
 
    // Calling toast method by passing string
    toast(this.state.message)
}

render() {
  
  return (
    
    <div >
      <img className='form-img11' src='images/books-1617327_1920.jpg' alt='spaceship' />
    <div className="form11"> 
        <Form className="row2"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle">Login</h2>
            
            <label >Username</label>
            <Input
           
            placeholder="Enter your username"
              type="number"
           
              name="username"
              value={this.state.username}
              onChange={this.onChangeUsername}
              validations={[required]}
            />
         

         
            <label htmlFor="password">Password</label>
            <Input
            
            placeholder="Enter your password"
              type="number"
              
              name="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              validations={[required]}
            />
          <br></br>

          
            <button class="button1"
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Login</span>
            </button>
          <br></br>
          <span className='form-input-login'>
        Already don't have an account?<br></br> Register <a href='registerUserselection'>here</a>
      </span>
        
          <br></br>
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
  
  