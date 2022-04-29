import React, { Component } from 'react';
import authService from '../services/auth.service';
import './WebScrapping.css';
import {toast} from 'react-toastify';
import {
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
    FormGroup,
    Label,
    Spinner
  } from 'reactstrap';
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
               <h2 id="headerTitle1">Book Scrapped Data</h2> 
      
      
            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th className='back2' >Book Name</th>
                               <th className='back2' >Author</th>
                               <th className='back2' >Image</th>
                               <th className='back2' >More Details</th>
                               
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td className='back1'>{employee.title}</td>
                                       <td className='back1'>{employee.name}</td>
                                       <td className='back1'> <img src={employee.image} className='viewAllImage'/></td>
                                       <td className='back1'>Price:{employee.price}<br></br>Category: {employee.category}<br></br>Published Year:{employee.year}</td>
                                       
                
                                       
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