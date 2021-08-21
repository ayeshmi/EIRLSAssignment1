import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: []
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.register=this.register.bind(this);
        this.password=this.password.bind(this);
    }
    editEmployee(id){
        this.props.history.push('/update-employee/${id}');

    }




componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
          this.setState({employees:res.data});
    });
}



    render() {
        return (
            <div>
               <h2 className="text-center">Employee List</h2> 
               <div className="row">
                   <button className="btn btn-primary" onClick={ this.addEmployee}>Add Employee</button>
                   <button onClick={ () => this.register()} className="btn btn-info">Register page</button>
                   <button onClick={ () => this.password()} className="btn btn-info">Passwordvalidation</button>
               </div>
               <div className="row">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Employee First name</th>
                               <th>Employee Last name</th>
                               <th>Employee Email Id</th>
                               <th>Action</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.emailId}</td>
                                       <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                       <button onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                       
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