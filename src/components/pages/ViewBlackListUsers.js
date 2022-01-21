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
                   <table >
                       <thead>
                           <tr>
                               <th className='back2'>Email</th>
                               <th className='back2'>Username</th>
                               <th className='back2'>Date Of Birth</th>
                               <th className='back2'> Action</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td className='back1'>{employee.email}</td>
                                       <td className='back1'>{employee.username}</td>
                                       <td className='back1'>{employee.dateOfBirth}</td>
                                       <td className='back1'>
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