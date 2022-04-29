import React, { Component } from "react";
import CardItem from "../CardItem";
import "./HomepageAdminCss.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';



export default class HomepageAdmin extends Component {
  constructor(props){
    super(props);
    
    this.viewCategories=this.viewCategories.bind(this);
    this.viewCategories1=this.viewCategories1.bind(this);
    this.viewCategories2=this.viewCategories2.bind(this);
    this.viewCategories3=this.viewCategories3.bind(this);
    this.state={
        books: []
    }   
}

  viewCategories(e){
    
    this.props.history.push(`/externalResources`);
      window.location.reload();
  
  }
  viewCategories1(e){
    
    this.props.history.push(`/ViewAllBooks`);
      window.location.reload();
  
  }
  viewCategories2(e){
    
    this.props.history.push(`/viewAllVideoDetails`);
      window.location.reload();
  
  }
  viewCategories3(e){
    
    this.props.history.push(`/viewAlluserDetails`);
      window.location.reload();
  
  }
    render() {        
            return (
                <div className="cards1">
      <h1>Admin Homepage.</h1>
      <div className="cards__container1">
        <div className="cards__wrapper1">
        <ul className='cards__items15 '>
                 <div>
               <Card style={{ width: '20rem', backgroundColor:'#191970' }}>
      <Card.Img variant="top" className='cardImage89' src="https://thumbs.dreamstime.com/b/book-shelf-banner-23911530.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.viewCategories1}>Handle Books</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '20rem', backgroundColor:'#191970' }}>
      <Card.Img variant="top" className='cardImage89' src="https://clipground.com/images/is-watching-clipart-15.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.viewCategories2}>Handle Videos</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '20rem', backgroundColor:'#191970' }}>
      <Card.Img variant="top" className='cardImage89' src="https://www.price2spy.com/blog/wp-content/uploads/2017/10/29-295797_listening-to-customers-png-cartoon-happy-customer-png.png" />
      <Card.Body>
        
        
        <Button variant="primary" onClick={this.viewCategories3}>Handle Customers</Button>
      </Card.Body>
    </Card>
    </div>

    
  
    </ul>
    <br></br>
    <ul className='cards__items15 '>
                 <div>
               <Card style={{ width: '20rem', backgroundColor:'#191970' }}>
      <Card.Img variant="top" className='cardImage89' src="https://www.dcmmoguls.com/wp-content/uploads/2017/10/social-bookmarking.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.viewCategories}>Handle External Resources</Button>
      </Card.Body>
    </Card>
    </div>
 

   
    </ul>    
        
          
        </div>
      </div>
    </div>
              )
          
        
      
                   
    }
}

  
  