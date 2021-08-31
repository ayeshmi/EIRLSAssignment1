import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
           
        }   
    }

componentDidMount(){
    authService.getBooksByID(this.state.id).then(  (res) =>{
        let employee = res.data;
        this.setState({firstName: employee.id,
            lastName: employee.author,
            emailId : employee.title
        });
    
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
                           
                               
                                       <td >id{this.state.firstName}</td>
                                       <td>hello{this.state.lastName}</td>
                                       <td>{this.state.emailId}</td>
                                       <button className="buttonV"
              
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Delete</span>
            </button>
                                       
                                   
                               
                           
                       </tbody>
                   </table>

               </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;