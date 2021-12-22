import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            reservations: []
        }   
    }

componentDidMount(){
    authService.getAllReservationToHandleReturns().then((res) => {
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
                               <th>Action</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.reservations.map(
                                reservation =>
                                   <tr key={reservation.id}>
                                       <td>{reservation.bookName}</td>
                                       <td>{reservation.email}</td>
                                       <td>{reservation.returnDate}</td>
                                       <td>{reservation.overduePayment}</td>
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