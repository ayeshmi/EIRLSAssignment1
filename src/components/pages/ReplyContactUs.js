import './ReplyContactUs.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';
import authService from '../services/auth.service';


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
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.state = {
        id:this.props.match.params.id,
      name: "",
      email: "",
      Message: "",
      loading: false,
      answer: ""
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

  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();
    let contactUS = {id:this.state.id,name: this.state.name, email: this.state.email, message:this.state.Message,answer: this.state.answer};
    console.log('employee => ' + JSON.stringify(contactUS));
    console.log('id => ' + JSON.stringify(this.state.id));
    authService.replyContactUs(contactUS, this.state.id).then( res => {
        this.props.history.push('/employees');
    });
}

render() {
  
  return (
    
    <div >
      <img className='form-img' src='images/boy-reading.svg' alt='spaceship' />
    <div className="form3"> 
        <Form className="row"
          
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
        <label htmlFor="answer">Answer</label>
             <TextField
             className="textField"
          id="standard-multiline-static"
          name="answer"
          multiline
          rows={4}
          placeholder="Enter your message"
          value={this.state.answer}
              onChange={this.onChangeAnswer}
              validations={[required]}
        />
          <br></br>

          
            <button class="button1"
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
              onClick={this.handleLogin}
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