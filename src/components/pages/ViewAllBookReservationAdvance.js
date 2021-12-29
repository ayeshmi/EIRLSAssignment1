import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
import {Link} from 'react-router-dom';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)
        
        this.state={
            id:this.props.match.params.bookID,
            reservations: [],
            email:" "

        }   
    }

componentDidMount(){
    //this.handleLogin = this.handleLogin.bind(this);
    let user = authService.getCurrentUser(); 
    this.state.email=user.email; 
    authService.getBookReservationById(this.state.id).then((res) => {
          this.setState({reservations:res.data});
    });
    

}



    render() {
        return (
            <div>
               <h2 id="headerTitle1">Reservation List</h2> 
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
                               this.state.reservations.map(
                                reservation =>
                                   <tr key={reservation.id}>
                                       <td>{reservation.bookName}</td>
                                       <td>{reservation.bookName}</td>
                                       <td>{reservation.returnDate}</td>
                                       
                                       <td>
                                       <a type="button" className="paymentButton"><Link to={`/advanceBookReservation/${reservation.bookId}`}>My route</Link></a>
           
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