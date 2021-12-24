import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';

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
                                       <td>{employee.username}</td>
                                       <td>{employee.dateOfBirth}</td>
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

export default ListEmployeeComponent;