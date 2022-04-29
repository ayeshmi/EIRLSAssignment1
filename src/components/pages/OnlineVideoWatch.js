
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

    authService.getOnlineVideoWatch(user.id).then((res) => {
          this.setState({reservations:res.data});
    });




   
  }

editEmployee(){
  this.props.history.push(`http://localhost:8082/api/auth/video/myfile.pdf`);

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
        
            
            <h1>Online Video List</h1>
           <br></br>
           <br></br>
            <br></br>
            <ul className="cards__items120">
          {
                    this.state.reservations.map(
                reservation =>
          <div class="cards__items12 " >
            
                         <Card style={{ width: '16rem', background: 'rgb(141, 190, 230)' }}>
      <Card.Img variant="top" className='cardImage12' src={reservation.imageOfVideo} />
      <Card.Body>
      
          <p style={{ color:'white',fontSize:'22px' }}><b>{reservation.title}</b></p>
          <p style={{ color:'black' }}>Author : {reservation.author}</p>
          <p style={{ color:'black' }}>Published Year : {reservation.year}</p>
          <p style={{ color:'black' }}>{reservation.category}</p>
          <a href={reservation.fileDownloadUri} >WATCH</a>
       
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
      <div className="cartPayment">
    <p className="lendingFee">Return videos on time will be helped to protect your account. </p> 
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