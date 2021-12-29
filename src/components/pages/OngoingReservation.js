
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
        reservations1: [],
        books:[],
        email:" ",
        price:" "
    };
}

  componentDidMount(){

    
    let user = authService.getCurrentUser(); 
     this.state.email=user.email;

    authService.getOngoingBookReseravtionDetails(user.email).then((res) => {
          this.setState({reservations:res.data});
    });

    authService.getOngoingVideoReseravtionDetails(user.email).then((res) => {
      this.setState({reservations1:res.data});
});


   
  }

editEmployee(id){
  this.props.history.push(`viewSelectedBook/${id}`);

}
handleLogin(e) {
    e.preventDefault();

    
    authService.confirmBookCart(this.state.email, this.state.price).then(
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
            <h1>Book</h1>
            <br></br>
            <ul className="cards__items123">
          {
                    this.state.reservations.map(
                reservation =>
          <div class="child cards__items12 "  onClick={ () => this.editEmployee(reservation.id)}>
            <CardItem
              src="https://icat.in/storage/app/public/uploads/banner_158211267013.png"
              text={reservation.bookName}
              label="Book"
            />   
            </div> 
              )
            }  
            </ul>
            <h1>Video</h1>
            <br></br>
            <ul className="cards__items123">
          {
                    this.state.reservations1.map(
                reservation =>
          <div class="child cards__items12 "  onClick={ () => this.editEmployee(reservation.id)}>
            <CardItem
              src="https://icat.in/storage/app/public/uploads/banner_158211267013.png"
              text={reservation.bookName}
              label="Book"
            />   
            </div> 
              )
            }  
            </ul>
            <br></br>
            <br></br>
          
          
          
    
        </div>
   
   
      </div>
   
      </div>
 
    );
  }

}