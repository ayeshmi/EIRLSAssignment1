import './ContactUs.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class ContactUs extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.state = {
        id:this.props.match.params.id,
      name: "",
      email: "",
      Message: "",
      loading: false,
      message: ""
    };
  }

  componentDidMount(){
    AuthService.getContactUsDetailById(this.state.id).then( (res) =>{
        let contact = res.data;
        this.setState({name: contact.name,
            email: contact.email,
            Message : contact.message
        });
    });
}

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeMessage(e) {
    this.setState({
      Message: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
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
      AuthService.contactUs(this.state.name, this.state.email,this.state.Message).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

render() {
  
  return (
    
    <div >
      <img className='form-img' src='images/boy-reading.svg' alt='spaceship' />
    <div className="form3"> 
        <Form className="row"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle">Contact Us</h2>
            
            <label >Name</label>
            <Input
           
            placeholder="Enter your username"
              type="text"
           
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
              validations={[required]}
            />
         

         
            <label htmlFor="email">Email</label>
            <Input
            
            placeholder="Enter your email"
              type="text"
              
              name="email"
              value={this.state.email}
              onChange={this.onChangeEmail}
              validations={[required]}
            />
             <label htmlFor="message">Message</label>
             <TextField
             className="textField"
          id="standard-multiline-static"
          name="Message"
          multiline
          rows={4}
          placeholder="Enter your message"
          value={this.state.Message}
              onChange={this.onChangeMessage}
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
             <span>Submit</span>
            </button>
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