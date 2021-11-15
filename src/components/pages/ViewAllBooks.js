import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllBooks.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    render() {
        return (
            <div>
               <h2 id="headerTitle1">Book List</h2> 
               <br></br><br></br>
               <Form
             onSubmit={this.handleSearch}
             ref={c => {
               this.form = c;
             }}>
             <div>
             
            <Input
              placeholder="Search By Title, Author or Keyword"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.onChangeSearch}
              validations={[required]}
              className="searchTextFieldVB" 
            />
            
           </div>
           <button className="commentButtonViewAll" onClick={this.handleSearch}>Search</button>
           <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}/>
          
             </Form> 

            <br></br>
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Title</th>
                               <th>Category</th>
                               <th>Date </th>
                               <th>Number of Copies</th>
                               <th>Update</th>
                               <th>Delete</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.books.map(
                                   book =>
                                   <tr key={book.id}>
                                       <td>{book.title}</td>
                                       <td>{book.category}</td>
                                       <td>{book.date}</td>
                                       <td>{book.numberOfCopies}</td>
                                       <td>
                                       <button className="buttonV"
              onClick={ () => this.DeleteBook(book.id)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              
             <span>Update</span>
            </button>
            </td>
                                       <td>
                                       <button className="buttonV"
              onClick={ () => this.DeleteBook(book.id)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              
             <span>Delete</span>
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