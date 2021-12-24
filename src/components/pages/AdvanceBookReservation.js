import './AdvanceBookReservation.css';
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from '../services/auth.service';
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

export default class ContactUs extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeBookName = this.onChangeBookName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.state = {
      loading: false,
      message: "",
      startDate:"",
      bookID:this.props.match.params.bookID,
      email1:"",
      bookName: ""
    };
  }
  
  componentDidMount(){
    
    let user = authService.getCurrentUser(); 
    this.state.email1=user.email; 
    authService.getBookReservationCart(user.email).then((res) => {
      this.setState({reservations:res.data});

      authService.getBooksByID(this.state.bookID).then(  (res) =>{
        let book = res.data;
        this.setState({bookName: book.title
            
        });
    
    });
});
}

onChangeBookName(e) {
    this.setState({
      bookName: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email1: e.target.value
    });
  }

  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }

  onChangeMessage(e){
      this.setState({
          message:e.target.value
      })
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      authService.advanceBookReservation(this.state.bookID,this.state.bookName, this.state.email1,this.state.startDate).then(
        () => {
          this.props.history.push("/adminHomepage");
          window.location.reload();
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
              }else{
                this.setState({
                  loading: false,
                  message: resMessage
                });
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
     
    <div className="form3"> 
        <Form className="row"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle">Advance Book Reservation</h2>
            
            <label >Book Name</label>
            <Input
           
            placeholder="Enter book name"
              type="text"
           
              name="bookName"
              value={this.state.bookName}
              onChange={this.onChangeBookName}
              validations={[required]}
              disabled
            />
         

         
            <label htmlFor="email">Email</label>
            <Input
              
              placeholder="Enter user email"
              type="text"
              name="email"
              value={this.state.email1}
              onChange={this.onChangeEmail}
              validations={[required]}
              disabled
            />

        <label>Lending Start Date</label>
            <Input
           
            placeholder="Select lending start date"
              type="date"
           
              name="startDate"
              value={this.state.startDate}
              onChange={this.onChangeStartDate}
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

