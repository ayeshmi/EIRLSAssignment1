import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllBooks.css';
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
        this.viewCategories=this.viewCategories.bind(this);
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

viewCategories(e){
    
  this.props.history.push(`/viewAllCategory`);
    window.location.reload();

}
updateBookImage(title){
    
    this.props.history.push(`/addBookImage/${title}`);
      window.location.reload();
  
  }

  updateBookOnline(title){
    
    this.props.history.push(`/addOnlineBook/${title}`);
      window.location.reload();
  
  }

    render() {
        return (
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>Handle Books</b></h2> 
               <br></br><br></br>
               
           

            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th className='back2'>Title</th>
                               <th className='back2'>Category</th>
                               <th className='back2'>Book Image</th>
                               <th className='back2'>Online Book</th>
                               <th className='back2'>Upload Image</th>
                               <th className='back2'> Upload Book</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.books.map(
                                   book =>
                                   <tr key={book.id}>
                                       <td className='back1'>{book.title}</td>
                                       <td className='back1'>{book.category}</td>
                                       <td className='back1'><img src={book.imageOfVideo} className='viewAllImage'></img></td> 
                                       <td className='back1'>{book.onlineBook != null ? `Available`:`Not Available`}</td>
                                       <td className='back1'>
                                       <button className="buttonVG"
              onClick={ () => this.updateBookImage(book.title)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              
             <span>Update Image</span>
            </button>
            </td>
                                       <td className='back1'>
                                       <button className="buttonVG"
              onClick={ () => this.updateBookOnline(book.title)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              
             <span>Online Book</span>
            </button>
            </td>
                                       
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

               </div>
            </div>
        );
    }
}

export default ListBooks;