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
        this.onlineBookView=this.onlineBookView.bind(this);
        this.addNewBook=this.addNewBook.bind(this);
        this.updateBook=this.updateBook.bind(this);
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
onlineBookView(e){
  this.props.history.push(`/viewAllOnlineBookView`);
  window.location.reload();
}
addNewBook(e){
  this.props.history.push(`/addBook`);
  window.location.reload();
}
updateBook(e){
  this.props.history.push(`/updateBookDetails`);
  window.location.reload();
}

    render() {
        return (
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>Handle Books</b></h2> 
               <br></br><br></br>
               <div className='cards__items13 '>
                 <div>
               <Card style={{ width: '12rem',backgroundColor:'rgb(119, 175, 212)' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook}>Add New Book</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '12rem',backgroundColor:'rgb(119, 175, 212)'  }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        <Button variant="primary" onClick={this.onlineBookView}>Online Book View</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '12rem' ,backgroundColor:'rgb(119, 175, 212)' }}>
      <Card.Img variant="top" src="https://cdn.everydaypower.com/wp-content/uploads/2018/03/Books-for-Leaders-1000x600.jpg" />
      <Card.Body>
        
        
        <Button variant="primary" onClick={this.viewCategories}>View All Categories</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Form
             onSubmit={this.handleSearch}
             ref={c => {
               this.form = c;
             }}>
             <div>
             
            <Input
              placeholder="Search By Title, Author or Any Keyword"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.onChangeSearch}
              validations={[required]}
              className="searchTextFieldVB1" 
            />
            
           </div>
           <button className="commentButtonViewAll1" onClick={this.handleSearch}>Search</button>
           <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}/>
          
             </Form> 
             </div>
    </div>
           

            <br></br>
               <div >
                   <table>
                       <thead>
                           <tr>
                               <th className='back2' >Title</th>
                               <th  className='back2'>Category</th>
                               <th  className='back2'>Image</th>
                               <th  className='back2'>Published Date </th>
                               <th  className='back2'>Number of Copies</th>
                               <th  className='back2'>Update</th>
                               <th  className='back2'>Delete</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.books.map(
                                   book =>
                                   <tr key={book.id}>
                                       <td className='back1'>{book.title}</td>
                                       <td className='back1'><img src={book.imageOfVideo} className='viewAllImage'></img></td> 
                                       <td className='back1'>{book.category}</td>
                                       <td className='back1'>{book.year}</td>
                                       <td className='back1'>{book.numberOfCopies}</td>
                                       <td className='back1'>
                                       <button className="buttonVG"
              onClick={ () => this.updateBook(book.id)} 
              disabled={this.state.loading} 
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              
             <span>Update</span>
            </button>
            </td>
                                       <td className='back1'>
                                       <button className="buttonVR"
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