import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
toast.configure();


class ListEmployeeComponent extends Component {

    constructor(props){
        super(props);
       
        this.state={
            employees: [],
            status:"",
            isOpen: false,
            message: ""
        }   
    }

componentDidMount(){
    authService.addNewBookIntegration().then((res) => {
          this.setState({employees:res.data});
    });
 
}

notify (){
 
    // Calling toast method by passing string
    toast.success(this.state.message)
}

handleAddNewBook(category,title,author,inumber,numberOfCopies,date,bookDescription,bookExcerpt,price,year,numberOfPages,status) {

    this.setState({
      message: "",
      loading: true
    });

    if (status === 'new') {
      authService. addNewBook(category,title,author,inumber,numberOfCopies,date,bookDescription,bookExcerpt,price,year,numberOfPages).then(
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
          toast.error(this.state.message);
        }
      );
    } else {
      authService. addNewBookCopy(category,title,author,inumber,numberOfCopies,date,bookDescription,bookExcerpt,price,year,numberOfPages).then(
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
          toast.error(this.state.message);
        }
      );
    }
  }


    render() {
        return (
            <div>
               <h2 id="headerTitle1">Add new books or copies</h2> 
            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th>Book Name</th>
                               <th>Image</th>
                               <th>Author</th>
                               <th>Category</th>
                               <th>Price</th>
                               <th>Published Year</th>
                               <th>ISBN-Number</th>
                               <th>Action</th> 
                                
                           </tr>   
                       </thead> 
                       <tbody>
                           {    
                               this.state.employees.map(
                                   employee =>
                                   
                                   <tr key={employee.id}>
                                       
                                       <td className='back1'> {employee.title}</td>
                                       <td className='back1'> {employee.title}</td>
                                       <td className='back1'>{employee.author}</td>
                                       <td className='back1'>{employee.category}</td>
                                       <td className='back1'>{employee.price}</td>
                                       <td className='back1'>{employee.year}</td>
                                       <td className='back1'>{employee.inumber}</td>
                                       <td className='back1'>
                                       <button className="buttonVG"
            onClick={() => this.handleAddNewBook(employee.category,employee.title,employee.author,employee.inumber,employee.numberOfCopies,employee.date,employee.bookDescription,employee.bookExcerpt,employee.price,employee.year,employee.numberOfPages,employee.status)}
              disabled={this.state.loading}
            >  
             <span>{employee.status == 'exist' ? `Add as a copy ` : 'Add as a new book'}</span>
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
export default ListEmployeeComponent;