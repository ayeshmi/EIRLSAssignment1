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
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state={
            books: []
        }   
    }

    
    onChangeSearch(e) {
        this.setState({
          search: e.target.value
        });
      }

componentDidMount(){
    authService.getBooks().then((res) => {
          this.setState({books:res.data});
    });
}

DeleteBook(id){
    authService.deleteBookById(id).then(
    
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          authService.getBooks().then((res) => {
            this.setState({books:res.data});
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
            successful: false,
            message: resMessage
          });
          this.notify();
        }
        
      );
}

notify (){
 
    // Calling toast method by passing string
    toast(this.state.message)
}

handleSearch(e){
    
    const h1=this.state.search;
    this.props.history.push(`/searchBookResultVB/${h1}`);
      window.location.reload();

}
getSelectedCategory(name){
    
  const h1=this.state.search;
  this.props.history.push(`/viewSelectedCategoryBooks/${name}`);
    window.location.reload();

}

    render() {
        return (
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>Book Category List</b></h2> 
               <br></br><br></br>
               <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://wallup.net/wp-content/uploads/2019/09/748406-archer-animation-series-cartoon-action-adventure-comedy-spy-crime.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Comic and Graphic Novel')}>Action and Adventure</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="http://4.bp.blogspot.com/-Ao53w2ES90U/TWb9uDtmtQI/AAAAAAAADHE/QfKLCTeZ4oM/s1600/Collection5.jpg" />
      <Card.Body>
        <Button variant="primary">Anthology</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://www.amreading.com/wp-content/uploads/Classic_Books-1-901x676.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">Classic</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://www.bestanimationstudios.com/images/services/illus/graphic-novel-illustration/graphic-novel-illustration06.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">Comic and Graphic Novels</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
<br></br>
        <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://3.bp.blogspot.com/-bPySRdL9nLM/WYrlSjKEhEI/AAAAAAAADII/plhRT2qd4OAVseVJrH2SzxmtCvB89gnTwCLcBGAs/w1200-h630-p-k-no-nu/A%2BKnight%2527s%2BVow%2BAMAZON%2BLARGE.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook}>Romance</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary">Online Book View</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>   
<br></br>
<ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook}>Add New Book</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary">Online Book View</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
    <br></br>
    <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook}>Add New Book</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary">Online Book View</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
            <br></br>
               
            </div>
        );
    }
}

export default ListBooks;