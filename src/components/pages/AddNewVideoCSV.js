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
            message: "",
            status:""
        }   
    }

componentDidMount(){
  authService.addNewVideoIntegration().then((res) => {
    this.setState({employees:res.data});
});
}


notify (){
 
    // Calling toast method by passing string
    toast.success(this.state.message)
}

handleAddNewBook(category,date,price,title,ageLimitation,author,publishedYear,numberOfCopies,price1,status) {

    this.setState({
      message: "",
      loading: true
    });

    if (status === 'new') {
      
      authService. addVideoDetails(category,date,price,title,ageLimitation,author,publishedYear,numberOfCopies,price1).then(
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
      authService. addVideoCopyDetails(category,date,price,title,ageLimitation,author,publishedYear,numberOfCopies,price1).then(
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
               <h2 id="headerTitle1">Add new videos or copies</h2> 
            <br></br>
               <div className="rowV">
                   <table>
                       <thead>
                           <tr>
                               <th>Video Name</th>
                               <th>Author</th>
                               <th>Age Limitation</th>
                               <th>Category</th>
                               <th>Number of Copies</th>
                               <th>Video Description</th>
                               <th>Image</th> 
                               <th>Action</th> 
                           </tr>   
                       </thead> 
                       <tbody>
                           {    
                               this.state.employees.map(
                                   employee =>
                                   
                                   <tr key={employee.id}>
                                       
                                       <td className='back1'> {employee.name}</td>
                                       <td className='back1'>{employee.author}</td>
                                       <td className='back1'>{employee.ageLimitation}</td>
                                       <td className='back1'>{employee.category}{employee.status}</td>
                                       <td className='back1'>{employee.numberOfCopies}</td>
                                       <td className='back1'>{employee.description}</td>
                                       <td className='back1'><img src={employee.image} className='viewAllImage'></img></td>
                                       <td className='back1'>
                                       <button className="buttonVG"
            onClick={() => this.handleAddNewBook(employee.category,employee.date,employee.price,employee.name,employee.ageLimitation,employee.author,employee.publishedYear,employee.numberOfCopies,employee.price1,employee.status)}
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