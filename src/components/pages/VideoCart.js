import CardItem from "../CardItem";
import "../Cards.css";
import "./BookCart.css";
import React, { Component } from 'react';
import authService from '../services/auth.service';
import { Card, Button } from 'react-bootstrap';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


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
  deleteCartBook(id){
    authService.deleteCartVideo(id);
    this.props.history.push(`/viewVideoReservationCart`);
      window.location.reload();
  
  }

editEmployee(id){
  this.props.history.push(`viewSelectedVideo/${id}`);

}
notify (){
 
  // Calling toast method by passing string
  toast(this.state.message)
}

handleLogin3(id,id1) {


    
  authService.deleteCartVideo(id1).then(
      () => {
        
        this.props.history.push(`/viewSelectedVideo/${id}`);
        window.location.reload();
        this.notify();
        
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
              this.notify();
            }
        
      }
    );

 
}

handleLogin(e) {
    e.preventDefault();

    
    authService.confirmVideoCart(this.state.email, this.state.price).then(
        () => {
          this.props.history.push(`lendingPayment/${this.state.email}/${this.state.price}`);
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
        
            
            <h1>Your Video Cart Details.</h1>
            
            <form className="checkOutForm" onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}>
            <div className="hi12">
        <h1 style={{ fontSize:'30px' }}>PAYMENT</h1></div>
      <br></br>
      <div className="cartPayment">
    <p className="lendingFee">Total Lending Fee:</p> 
    <p className="totalFee">Rs. {this.state.price}. 00</p> 
    <div className="ayeshmi">
    <button className="cartPaymentButton">Confirm and Pay</button>
  
              <div class="card-body">
                
                <img class="me-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img class="me-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express" />
                <img class="me-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img class="me-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark" />
              </div>
            
            </div>
    </div>
   
     </form>
            <ul className="cards__items120">
          {
                    this.state.reservations.map(
                reservation =>
                <div class="cards__items12o "  >
                <Card style={{ width: '16rem',height:'25rem', backgroundColor:'#77b5fe' }}>
  <Card.Img variant="top" className='cardImage12' src={reservation.image} />
  <Card.Body>
      <p style={{ fontSize:'20px'}}><b>{reservation.videoName}</b></p>
      
    <Button variant="primary" style={{ alignContent:'center' }}  onClick={()=>this.editEmployee(reservation.videoId)}>View</Button>
    
    <Button variant="primary" style={{ alignContent:'right', backgroundColor:'#00008b' }}  onClick={()=>this.handleLogin3(reservation.videoId,reservation.id)}>Edit</Button>
    <Button variant="primary" style={{ alignContent:'right', backgroundColor:'red' }}  onClick={()=>this. deleteCartBook(reservation.id)}>Delete</Button>
  </Card.Body>
</Card>
         
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

