import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
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
    authService.getUsers().then((res) => {
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
                               <th>Email</th>
                               <th>Profile Image</th>
                               <th>Username</th>
                               <th>Date Of Birth</th>
                               <th>Action</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td>{employee.email}</td>
                                       <td><img src={employee.imageOfProfile} className='image129'/></td>
                                       <td>{employee.username}</td>
                                       <td>{employee.dateOfBirth}</td>
                                       <td>
                                       <button className="buttonV"
              onClick={ () => this.DeleteUser(employee.id)} 
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

export default ListEmployeeComponent;