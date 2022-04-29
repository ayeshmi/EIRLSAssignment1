import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
toast.configure()

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            employees: []
        }   
    }

componentDidMount(){
    authService.viewBlackListCustomers().then((res) => {
          this.setState({employees:res.data});
    });
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
          toast.error(this.state.message);
        }
        
      );
}

    render() {
        return (
            <div>
               <h2 id="headerTitle1">User List</h2> 
            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th className='back2'>Email</th>
                               <th className='back2'>Username</th>
                               <th className='back2'>Profile</th>
                               <th className='back2'> User Type</th>
                               <th className='back2'> Date of Birth</th>
                               <th className='back2'> Delete</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td className='back1'>{employee.email}</td>
                                       <td className='back1'>{employee.username}</td>
                                       <td className='back1'><img src={employee.imageOfProfile} className='viewAllImage'/></td>
                                       <td className='back1'>{employee.userType}</td>
                                       <td className='back1'>{employee.dateOfBirth}</td>
                                       <td className='back1'>
                                       <button className="buttonVR"
              onClick={ () => this.DeleteUser(employee.id)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>DELETE</span>
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