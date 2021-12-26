import CardItem from "../CardItem";
import "../Cards.css";
import "./BookCart.css";
import React, { Component } from 'react';
import authService from '../services/auth.service';


export default class AddNewBook extends Component {

  constructor(props){
    super(props);
    
    this.handleLogin = this.handleLogin.bind(this);
    this.state={
        //open:false,
        reservations: [],
        books:[],
        email:" ",
        price:" "
    };
}

  componentDidMount(){

    
    let user = authService.getCurrentUser(); 
     this.state.email=user.email;

    authService.getVideoReservationCart(user.email).then((res) => {
          this.setState({reservations:res.data});
    });

    authService.getCheckOutTotalPricvideo(user.email).then((res) => {
        this.setState({price:res.data});
  });

   
  }

editEmployee(id){
  this.props.history.push(`viewSelectedVideo/${id}`);

}
handleLogin(e) {
    e.preventDefault();

    
    authService.confirmVideoCart(this.state.email, this.state.price).then(
        () => {
          this.props.history.push(`lendingPayment/${this.state.email}`);
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

   
  }

  render(){
    return (
        <div>
            
      <div className="cards">
      
       <div>
        
            
            <h1>Your Backet Details.</h1>
            <br></br>
            <ul className="cards__items123">
          {
                    this.state.reservations.map(
                reservation =>
          <div class="child cards__items12 "  onClick={ () => this.editEmployee(reservation.id)}>
            <CardItem
              src="https://icat.in/storage/app/public/uploads/banner_158211267013.png"
              text={reservation.videoName}
              label="Book"
            />   
            </div> 
              )
            }  
            </ul>
            <br></br>
            <br></br>
          
          
          
    
        </div>
        <form className="checkOutForm" onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}>
        <h1>CheckOut</h1>
      <br></br>
      <div className="cartPayment">
    <p className="lendingFee">Total Lending Fee:</p> 
    <p className="totalFee">Rs. {this.state.price}. 00</p> 
    <button className="cartPaymentButton">Confirm and Pay now</button>
 
    </div>
     </form>
   
      </div>
   
      </div>
 
    );
  }

}

