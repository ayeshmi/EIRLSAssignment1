import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewSelectedCategoryBook.css';
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
        this.addNewBook=this.addNewBook.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state={
            category:this.props.match.params.category,
            books: []
        }   
    }

    
    onChangeSearch(e) {
        this.setState({
          search: e.target.value
        });
      }

componentDidMount(){
  let user = authService.getCurrentUser(); 
  authService.RhomePageVideosRomanceUser(user.id).then((res) => {
    this.setState({ books:res.data});
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
addNewBook(e){
    
  const h1=this.state.search;
  this.props.history.push(`/addBook`);
    window.location.reload();

}
viewSelectedBookDetails(id){
 
    this.props.history.push(`/viewSelectedVideo/${id}`);
      window.location.reload();
  
  }

    render() {
        return (
            <div className='bodyOfCategoryBook'>
              <br></br>
               <h2 id="headerTitle1"><b>{this.state.category} Videos</b></h2> 
               <br></br><br></br>
               <ul className='cards__items14 '>
                 <div className='cards__items14 '> 
                 {
                               this.state.books.map(
                                   book =>
               <Card style={{  width: '16rem',height:'30rem', backgroundColor:'#77b5fe' }}>
      <Card.Img variant="top" className='cardImage12' src={book.imageOfVideo} />
      <Card.Body>
          <p style={{ fontSize:'20px',color:'#f0f8ff'}}><b>{book.title}</b></p>
          <p style={{ color:'black' }}>{book.author}</p>
          <p style={{ color:'black' }}>{book.year}</p>
          <p style={{ color:'black' }}>{book.category}</p>
        <Button variant="primary" style={{ alignContent:'center' }}  onClick={()=>this.viewSelectedBookDetails(book.id)}>View</Button>
      </Card.Body>
    </Card>
                               )}
    </div>
    
    </ul>
            <br></br>
               
            </div>
        );
    }
}

export default ListBooks;