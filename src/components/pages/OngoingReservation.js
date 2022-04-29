
import CardItem from "../CardItem";
import "../Cards.css";
import "./OngoingReservation.css";
import React, { Component } from 'react';
import authService from '../services/auth.service';
import { Card, Button } from 'react-bootstrap';

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
        
            
            <h1>On Going Book Lendings</h1>
           <br></br>
           <br></br>
            <br></br>
            <ul className="cards__items123r">
          {
                    this.state.reservations.map(
                reservation =>
          <div class="cards__items12 "  onClick={ () => this.editEmployee(reservation.bookId)}>
            
                         <Card style={{ width: '16rem', background: 'rgb(141, 190, 230)' }}>
      <Card.Img variant="top" className='cardImage12' src={reservation.image} />
      <Card.Body>
          <p style={{ color:'white',fontSize:'22px' }}><b>{reservation.bookName}</b></p>
          <p style={{ color:'black' }}>Lended Date : {reservation.date}</p>
          <p style={{ color:'black' }}>Return Date : {reservation.returnDate}</p>
          <p style={{ color:'black' }}>Overdue Fee : Rs.{reservation.overduePayment}.00</p>
          
        <Button variant="primary" style={{ alignContent:'center' }}  >View</Button>
      </Card.Body>
    </Card>  
            </div> 
              )
            }  
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <form className="checkOutForm123" onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}>
            <div className="hi123">
        <h1 style={{ fontSize:'25px', alignContent:'center' }}>WARNING !</h1></div>
      <br></br>
      <div >
    <p className="lendingFee">Return books on time will be helped to protect your account. </p> 
    </div>
    
   
   
     </form>
            <br></br>
            <br></br>
          
          
          
    
        </div>
   
   
      </div>
   
      </div>
 
    );
  }

}