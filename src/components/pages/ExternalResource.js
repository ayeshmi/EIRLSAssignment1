import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllCategory.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardItem from "../CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
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

class ListBooks extends Component {

    constructor(props){
        super(props);
        this.getSelectedCategory1=this.getSelectedCategory1.bind(this);
        this.getSelectedCategory2=this.getSelectedCategory2.bind(this);
        this.getSelectedCategory3=this.getSelectedCategory3.bind(this);
        this.getSelectedCategory4=this.getSelectedCategory4.bind(this);
        this.getSelectedCategory5=this.getSelectedCategory5.bind(this);
        this.getSelectedCategory6=this.getSelectedCategory6.bind(this);
        
        this.state={
            books: []
        }   
    }

    







getSelectedCategory1(){
    
 
  this.props.history.push(`/bookScraping`);
    window.location.reload();

}

getSelectedCategory2(){
    
    
    this.props.history.push(`/videoScraping`);
      window.location.reload();
  
  }
  getSelectedCategory3(){
    
 
    this.props.history.push(`/apiIntegration`);
      window.location.reload();
  
  }
  getSelectedCategory4(){
    
   
    this.props.history.push(`/apiIntegrationVideo`);
      window.location.reload();
  
  }
  getSelectedCategory5(){
    

    this.props.history.push(`/addNewBookIntegration`);
      window.location.reload();
  
  }
  getSelectedCategory6(){
    
    
    this.props.history.push(`/addNewVideoIntegration`);
      window.location.reload();
  
  }



    render() {
        return (
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>External Resources</b></h2> 
               <br></br><br></br>
               <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://cdn.lovesavingsgroup.com/logos/booklender.png" />
      <Card.Body>
        <Button variant="primary" onClick={this.getSelectedCategory1}>LendBook.com</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://www.rtv.de/wp-content/uploads/2020/11/amazon-prime-video-002.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.getSelectedCategory2}>Amazon.com</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://socialgeek.co/wp-content/uploads/2013/12/Google-Book-Scanning-Targeted-Amazon.png" />
      <Card.Body>
        
        
        <Button variant="primary" onClick={this.getSelectedCategory3}>Google Book API</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://i.pinimg.com/originals/a1/6b/1d/a16b1d1a9f1a90a612f9f5e86a5e9d4c.jpg" />
      <Card.Body>
        
        
        <Button variant="primary" onClick={this.getSelectedCategory4}>ImbD API</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
<br></br>
        <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://opencrdownloadfile.co/wp-content/uploads/2020/04/open-csv-file.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.getSelectedCategory5}>Book CSV</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://opencrdownloadfile.co/wp-content/uploads/2020/04/open-csv-file.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.getSelectedCategory6}>Video CSV</Button>
      </Card.Body>
    </Card>
    </div>
    
    </ul>   
<br></br>

            <br></br>
               
            </div>
        );
    }
}

export default ListBooks;