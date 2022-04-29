import React, { Component } from "react";
import Cards from "../Cards";
import CardItem from "../CardItem";
import "./Registrationpage1.css";
import { createMuiTheme } from "@material-ui/core";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";




export default class Registerpage1 extends Component {

  constructor(props) {
    super(props);
   this.handleSearch=this.handleSearch.bind(this);
   this.handleSearch1=this.handleSearch1.bind(this);
   this.handleSearch2=this.handleSearch2.bind(this);
   this.handleSearch3=this.handleSearch3.bind(this);
 

  }

  RegisterPage(name){
    this.props.history.push(`/replyContactUsRequest/${name}`);
}

handleSearch(e){
    
    
  this.props.history.push(`/register/Platinum`);
    window.location.reload();

}

handleSearch1(e){
    
    
  this.props.history.push(`/register/Gold`);
    window.location.reload();

}

handleSearch2(e){
    
    
  this.props.history.push(`/register/Bronze`);
    window.location.reload();

}

handleSearch3(e){
    
    
  this.props.history.push(`/register/Silver`);
    window.location.reload();

}

    render() {
       
          
            return (
              <div>
                <h1 style={{ color:'white'}}>Select your user type?</h1>
                <div style={{ alignItems:'center' }}>
                <Card style={{ width: '95rem',height:'10rem', backgroundColor:'white',alignItems:'center' }}>
      <Card.Body>
          <p style={{ fontSize:'20px',color:'black'}}><b>User Type</b></p>
          <p style={{ fontSize:'20px',color:'black'}}><b>We have four types of customers namely bronze, silver gold and platinum. Each customer has different lending limitations. Following is how each type of customer can reserve books and videos. 

</b></p>
      
      </Card.Body>
    </Card>
    </div>
                <br></br>
                <div className='card2 cards__items1456'>
      
      
            <div>
          <Card style={{ width: '16rem',height:'52rem', backgroundColor:'white' }}>
      <Card.Img variant="top" className='cardImage12' src='https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg' />
      <Card.Body>
          <p style={{ fontSize:'20px',color:'black'}}><b>User Type</b></p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Number of Books</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Number of Videos </p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Book Lending Duration(days)</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Video Lending Duration(days)</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Book Lending Chargers(LKR)</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Video Lending Chargers(LKR)</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>Annual Membership Fee(LKR)</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>OverDue Chargers(perday/LKR)</p>
          <hr style={{ color:'black' }} />
      
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '16rem',height:'52rem', backgroundColor:'#a99a86' }}>
      <Card.Img variant="top" className='cardImage12' src='images/Bronze-shutterstock_1681180837-700x390.jpg' />
      <Card.Body>
      <p style={{ fontSize:'20px',color:'blue'}}><b>Bronze</b></p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>3</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>5 </p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>21</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>5</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>50</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>100</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>1000</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>20</p>
          <hr style={{ color:'black' }}/>
        <Button variant="primary" style={{ alignContent:'center' }} onClick={this.handleSearch2} >Register</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
          <Card style={{ width: '16rem',height:'52rem', backgroundColor:'#bfc1c2' }}>
      <Card.Img variant="top" className='cardImage12' src='images/istockphoto-184415150-612x612.jpg' />
      <Card.Body>
      <p style={{ fontSize:'20px',color:'blue'}}><b>Silver </b></p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>5</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>7 </p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>28</p>
          <hr style={{ color:'black' }} />
          <p style={{ color:'black' }}>7</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>40</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>80</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>2000</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>15</p>
          <hr style={{ color:'black' }}/>
        <Button variant="primary" style={{ alignContent:'center' }} onClick={this.handleSearch3} >Register</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
     <Card style={{ width: '16rem',height:'52rem', backgroundColor:'#e4d96f' }}>
      <Card.Img variant="top" className='cardImage12' src='images/istockphoto-497802746-612x612.jpg' />
      <Card.Body>
      <p style={{ fontSize:'20px',color:'blue'}}><b>Gold</b></p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>7</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>9 </p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>28</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>10</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>30</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>60</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>3000</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>10</p>
          <hr style={{ color:'black' }}/>
        <Button variant="primary" style={{ alignContent:'center' }}  onClick={this.handleSearch1}>Register</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
     <Card style={{ width: '16rem',height:'52rem', backgroundColor:'#a9a9a9' }}>
      <Card.Img variant="top" className='cardImage12' src='images/istockphoto-1030071582-612x612.jpg' />
      <Card.Body>
      <p style={{ fontSize:'20px',color:'blue'}}><b>Platinum</b></p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>10</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>10 </p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>35</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>7</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>20</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>40</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>5000</p>
          <hr style={{ color:'black' }}/>
          <p style={{ color:'black' }}>5</p>
          <hr style={{ color:'black' }}/>
        <Button variant="primary" style={{ alignContent:'center' }}  onClick={this.handleSearch}><Link path='/register/Platinum'></Link>Register</Button>
      </Card.Body>
    </Card>     
    </div>       
           
      
      </div>
    
      </div>
              )
          
        
      
                   
    }
}

  
  