import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';

class ListBooks extends Component {

    constructor(props){
        super(props)
        this.state={
            books: []
        }   
    }

componentDidMount(){
    authService.getBooks().then((res) => {
          this.setState({books:res.data});
    });
}

    render() {
        return (
            <div>
               <h2 id="headerTitle1">Book List</h2> 
            <br></br>
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Title</th>
                               <th>Category</th>
                               <th>Date </th>
                               <th>Number of Copies</th>
                               <th>Action</th>
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