import './Registration.css';
import React, { Component,useState } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye ,faTimes,faCheck,faEyeSlash} from "@fortawesome/free-solid-svg-icons";

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
      username: "",
      email:"",
      birthday:"",
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
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.birthday,
        this.state.password
        
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
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
        }
      );
    }
  }

render() {
  return (
    <div >
     <img className='form-img22' src='images/books-1617327_1920.jpg' alt='spaceship' /> 
<div className="form2">
        <Form class="row1"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle1">Register</h2>
          
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
            <label >Password</label>
            <Input
           
            placeholder="Enter your password"
              type="password"
           
              name="password"
              value={this.state.password}
              onChange={this.onChangePassword}
              validations={[required]}
            />
             


<p id="capital">
<FontAwesomeIcon  className="fa-times icon" icon={faTimes}/>
<FontAwesomeIcon  className="fa-check icon" icon={faCheck}/>
<span>Capital Letters</span>
</p>
<p id="char">
<FontAwesomeIcon  className="fa-times icon" icon={faTimes}/>
<FontAwesomeIcon  className="fa-check icon" icon={faCheck}/>
<span>Special Characters</span>
</p>
<p id="num">
<FontAwesomeIcon className="fa-times icon" icon={faTimes}/>
<FontAwesomeIcon  className="fa-check icon" icon={faCheck}/>
<span>Use Numbers</span>
</p>
<p id="more8">
<FontAwesomeIcon className="fa-times icon" icon={faTimes}/>
<FontAwesomeIcon  className="fa-check icon" icon={faCheck}/>
<span>8+ Characters</span>
</p>

          <br></br>

          <div className="form-group">
            <button class="row"
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Regsiter</span>
            </button>
            <br></br>
            <span className='form-input-login'>
        Already have an account? Login <a href='login'>here</a>
      </span>
          </div>
<br></br>
          {this.state.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
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