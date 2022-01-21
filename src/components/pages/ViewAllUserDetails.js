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

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class ListEmployeeComponent extends Component {

    constructor(props){
      super(props)
      this.addNewBook=this.addNewBook.bind(this);
      this.addNewBook1=this.addNewBook1.bind(this);
      this.onChangeSearch=this.onChangeSearch.bind(this);
      this.handleSearch=this.handleSearch.bind(this);
        
        this.state={
            employees: [],
            search:""
        }   
    }

componentDidMount(){
    authService.getUsers().then((res) => {
          this.setState({employees:res.data});
    });
 
}

onChangeSearch(e) {
  this.setState({
    search: e.target.value
  });
}

addNewBook(e){
  this.props.history.push(`/viewBlackListUsers`);
  window.location.reload();
}
addNewBook1(e){
  this.props.history.push(`/viewAllReservationDetails`);
  window.location.reload();
}
notify (){
 
    // Calling toast method by passing string
    toast.success(this.state.message)
}

handleSearch(e){
    
  const h1=this.state.search;
  this.props.history.push(`/searchUser/${h1}`);
    window.location.reload();

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
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1">User List</h2> 
            <br></br>
            <div className='cards__items13 '>
                 <div>
               <Card style={{ width: '12rem',backgroundColor:'rgb(119, 175, 212)' }}>
      <Card.Img variant="top" src="https://www.price2spy.com/blog/wp-content/uploads/2017/10/29-295797_listening-to-customers-png-cartoon-happy-customer-png.png" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook}>View Black List Customers</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '12rem',backgroundColor:'rgb(119, 175, 212)' }}>
      <Card.Img variant="top" src="https://www.price2spy.com/blog/wp-content/uploads/2017/10/29-295797_listening-to-customers-png-cartoon-happy-customer-png.png" />
      <Card.Body>
        <Button variant="primary" onClick={this.addNewBook1}>View Reservation Details of Users</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Form
             onSubmit={this.handleSearch}
             ref={c => {
               this.form = c;
             }}>
             <div>
             
            <Input
              placeholder="Search By Title, Author or Any Keyword"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.onChangeSearch}
              validations={[required]}
              className="searchTextFieldVB12" 
            />
            
           </div>
           <button className="commentButtonViewAll12" onClick={this.handleSearch}>Search</button>
           <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}/>
          
             </Form> 
             </div>
    </div>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th className='back2'> User ID</th>
                               <th className='back2'>Email</th>
                               <th className='back2'>Profile Image</th>
                               <th className='back2'>User Type</th>
                               <th className='back2'>Username</th>
                               <th className='back2'> Date Of Birth</th>
                               <th className='back2'>View</th>
                               <th className='back2'>Delete</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                     <td className='back1'>{employee.id}</td>
                                       <td className='back1'>{employee.email}</td>
                                       <td className='back1'><img src={employee.imageOfProfile} className='viewAllImage'/></td>
                                       <td className='back1'>{employee.userType}</td>
                                       <td className='back1'>{employee.username}</td>
                                       <td className='back1'>{employee.dateOfBirth}</td>
                                       <td className='back1'>
                                       <button className="buttonVG"
              onClick={ () => this.DeleteUser(employee.id)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>VIEW</span>
            </button>
            </td>
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