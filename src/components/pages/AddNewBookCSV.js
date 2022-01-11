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
    toast(this.state.message)
}

handleAddNewBook(category,title,author,inumber,numberOfCopies,date,bookDescription,bookExcerpt,price,year,numberOfPages,status) {

    this.setState({
      message: "",
      loading: true
    });

    if (status === 'new') {
      authService. addNewBook(category,title,author,inumber,numberOfCopies,date,bookDescription,bookExcerpt,price,year,numberOfPages).then(
        () => {
         // this.props.history.push("/addNewBookIntegration");
          window.location.reload();
       
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
              if(resMessage=="Request failed with status code 401"){
                this.setState({
                  loading: false,
                  message: "Username or Password is incorrect, Check again"
                });
                this.notify();
              }else{
                this.setState({
                  loading: false,
                  message: resMessage
                });
                this.notify();
              }
          
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }


    render() {
        return (
            <div>
               <h2 id="headerTitle1">Add New Book</h2> 
            <br></br>
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Book Name</th>
                               <th>Author</th>
                               <th>Category</th>
                               <th>Action</th>
                               
                           </tr>
                           
                       </thead>
                      
                       <tbody>
                           {
                               
                               this.state.employees.map(
                                   employee =>
                                   
                                   <tr key={employee.id}>
                                       
                                       <td> {employee.title}</td>
                                       <td>{employee.author}</td>
                                       <td>{employee.category}</td>
                                       <td>
                                       <button className="buttonV"
            onClick={() => this.handleAddNewBook(employee.category,employee.title,employee.author,employee.inumber,employee.numberOfCopies,employee.date,employee.bookDescription,employee.bookExcerpt,employee.price,employee.year,employee.numberOfPages,employee.status)}
              disabled={this.state.loading}
            >
             
             <span>{employee.title == 'exist' ? `Add as a copy ` : 'Add as a new book'}</span>
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