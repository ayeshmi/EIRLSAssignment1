import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllBooks.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardItem from "../CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
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

class ListBooks extends Component {

    constructor(props){
        super(props);
    
        this.state={
          Videos: []
        }   
    }


componentDidMount(){
  authService.viewAllReservation().then((res) => {
    this.setState({Videos:res.data});
});
}









    render() {
        return (
     
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>Handle Videos</b></h2> 
            <br></br>
               <div >
                   <table>
                       <thead>
                           <tr>
                               <th className='back2' >ID</th>
                               <th  className='back2'>Email</th>
                               <th  className='back2'>Annual Fee</th>
                               <th  className='back2'>Book Charges </th>
                               <th  className='back2'>Book Lending Duration</th>
                               <th  className='back2'>Number of Book Lending</th>
                               <th  className='back2'>Video Charges </th>
                               <th  className='back2'>Video Lending Duration</th>
                               <th  className='back2'>Number of Video Lending</th>
                               <th  className='back2'>Overdue Fee</th>
                               
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.Videos.map(
                                   book =>
                                   <tr key={book.id}>
                                       <td className='back1'>{book.id}</td>
                                       
                                       <td className='back1'>{book.username}</td>
                                       <td className='back1'>{book.annualFee}</td>
                                       <td className='back1'>{book.bookCharges}</td>
                                       <td className='back1'>{book.bookDurationDays}</td>
                                       <td className='back1'>{book.numberOfBooks}</td>
                                       <td className='back1'>{book.videoCharges}</td>
                                       <td className='back1'>{book.videoDurationDays}</td>
                                       <td className='back1'>{book.numberOfVideos}</td>
                                       <td className='back1'>{book.overdur}</td>
                                      
                                       
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

export default ListBooks;