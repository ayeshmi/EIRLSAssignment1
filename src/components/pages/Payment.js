import './Payment.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCardType = this.onChangeCardType.bind(this);
    this.onChangeCvv = this.onChangeCvv.bind(this);
    this.onChangecardHolderName = this.onChangecardHolderName.bind(this);
    this.onChangecardNumber = this.onChangecardNumber.bind(this);
    this.onChangeExpiryDate = this.onChangeExpiryDate.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.state = {
      reason: "",
      price: "",
      cardType: "",
      cardHolderName:"",
      cardNumber:"",
      expiryDate:"",
      cvv:"",
      loading: false,
      message: "",
      email:this.props.match.params.email
    };
  }

  componentDidMount(){
    
    authService.getPaymentDetailsByEmail(this.state.email).then(  (res) =>{
      let payment = res.data;
      this.setState({reason: payment.reason,
          price: payment.price
      });
  
  });
}

  onChangeReason(e) {
    this.setState({
      reason: e.target.value
    });
  }

  onChangeCardType(e) {
    this.setState({
      cardType: e.target.value
    });
  }

  onChangecardHolderName(e) {
    this.setState({
      cardHolderName: e.target.value
    });
  }

  onChangecardNumber(e) {
    this.setState({
      cardType: e.target.value
    });
  }

  onChangeExpiryDate(e) {
    this.setState({
      cardType: e.target.value
    });
  }

  onChangeCvv(e) {
    this.setState({
      cardType: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
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
      AuthService.addPayment(this.state.cardType, this.state.cardHolderName,this.state.cardNumber,this.state.expiryDate,this.state.cvv,this.state.email).then(
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
            <h2 id="headerTitle">Payment</h2>
            
            <label >Payment Reason</label>
            <Input
           
            placeholder="Enter payment reason"
              type="text"
           
              name="reason"
              value={this.state.reason}
              onChange={this.onChangeReason}
              validations={[required]}
              disabled
            />
         

         
            <label htmlFor="email">Price (Rs.)</label>
            <Input
              
              placeholder="Enter your price"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.onChangePrice}
              validations={[required]}
              disabled
            />

        <label>Card Type</label>

        <FormControl >
        <InputLabel id="demo-simple-select-label">Select card type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.cardType}
          onChange={this.onChangeCardType}  
          className="formItem"
          
        >
            
          <MenuItem value={"Debit"}><img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Visa-512.png "  className='imageff'/>Visa</MenuItem>
          <MenuItem value={"Credit"}><img src="https://static.vecteezy.com/system/resources/previews/000/357/048/non_2x/vector-credit-card-icon.jpg"  className='imageff'/>Credit</MenuItem>
          <MenuItem value={"Classic"}><img src="https://cdn3.iconfinder.com/data/icons/payment-methods-18/512/paypal_card_income_pattern_paying_payment-512.png"  className='imageff'/>PayPal</MenuItem>
        
          
        </Select>
      </FormControl>

             <label htmlFor="message">Card Holder Name</label>
             <Input
            
            placeholder="Enter card holder name"
              type="text"
              
              name="cardHolderName"
              value={this.state.cardHolderName}
              onChange={this.onChangecardHolderName}
              validations={[required]}
            />
            <label htmlFor="message">Card Number</label>
             <Input
            
            placeholder="4569 7589 7596 7581"
              type="text"
              
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={this.onChangecardNumber}
              validations={[required]}
            />
            <div className="rowPayment">
            <label htmlFor="message">Expiry Date</label>
            <label htmlFor="message">CVV</label>
             <Input
            
            placeholder="MM/YY"
              type="text"
              className="expiryDate"
              name="expiryDate"
              value={this.state.expiryDate}
              onChange={this.onChangeExpiryDate}
              validations={[required]}
            />
            
             <Input
            
            placeholder="758"
              type="number"
              
              name="cvv"
              value={this.state.cvv}
              onChange={this.onChangeCvv}
              validations={[required]}
            />
            </div>
            
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