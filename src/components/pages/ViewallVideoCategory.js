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
  this.props.history.push(`/viewSelectedCategoryVideos/${name}`);
    window.location.reload();

}

    render() {
        return (
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>Video Category List</b></h2> 
               <br></br><br></br>
               <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/action-adventure-movies-featured.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Romance')}>Action and Adventure</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://i.ytimg.com/vi/tDqrV_hzDTk/maxresdefault.jpg" />
      <Card.Body>
        <Button variant="primary">Anthology</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://www.verblio.com/wp-content/uploads/2018/08/old-movie-blog-topics.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">Classic</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://gentlegamer.de/wp-content/uploads/2018/10/ee16eb3a1564e5f9a5e5d7f9af297aff._SX1280_QL80_TTD_.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">Comic and Graphic Movies</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
<br></br>
        <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://static3.srcdn.com/wordpress/wp-content/uploads/2020/05/pjimage-64.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook}>Romance</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" className='cardImage' src="https://www.deadgoodbooks.co.uk/wp-content/uploads/2019/11/Best-crime-movies-of-2019.jpg" />
      <Card.Body>
        <Button variant="primary">Crime and Detective</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(74, 165, 201)' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary">Crime and Detective</Button>
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