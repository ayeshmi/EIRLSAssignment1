import React, { Component } from 'react';
import authService from '../services/auth.service';
import './WebScrapping.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            employees: [],
        }   
    }

componentDidMount(){
    authService.bookWebscraping().then((res) => {
          this.setState({employees:res.data});
    });
 
}

notify (){
 
    // Calling toast method by passing string
    toast(this.state.message)
}

DeleteUser(id){
    authService.deleteUser(id).then(
        
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          authService.getUsers().then((res) => {
            this.setState({employees:res.data});
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

    render() {
        return (
            <div>
               <h2 id="headerTitle1">User List</h2> 
            <br></br>
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Book Name</th>
                               <th>Author</th>
                               <th>Image</th>
                               <th>More Details</th>
                               <th>Action</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td>{employee.title}</td>
                                       <td>{employee.name}</td>
                                       <td><img src={employee.image} className='image1294'/></td>
                                       <td>Price:{employee.price}<br></br>Category: {employee.category}<br></br>Published Year:{employee.year}</td>
                                       
                                       <td>
                                       <a href='${employee.url}'>More Details</a>
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