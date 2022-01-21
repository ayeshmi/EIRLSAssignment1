import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class ViewAllContactUs extends Component {

    constructor(props){
        super(props)
        this.state={
            ContactUsDetails: []
        }   
    }

    ReplyContact(id){
        this.props.history.push(`/replyContactUsRequest/${id}`);
    }

    
handleLogin1(price) {
 
  let user = authService.getCurrentUser(); 
        this.props.history.push(`lendingPayment/${user.email}/${price}`);
        window.location.reload();

}

componentDidMount(){
    let user = authService.getCurrentUser(); 
    authService.viewAllPayments(user.email).then((res) => {
          this.setState({ContactUsDetails:res.data});
    });
}

notify (){
 
    // Calling toast method by passing string
    toast('Successfully Deleted.')
}

    render() {
        return (
            <div>
               <h2 id="headerTitle1">Unpaid Payments.</h2> 
            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th className='back2'>Reason</th>
                               <th className='back2'>Price (Rs.)</th>
                               <th className='back2'>Status</th>
                               <th className='back2'>Pay</th>
                               
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.ContactUsDetails.map(
                                   detail =>
                                   <tr key={detail.id}>
                                       <td className='back1'>{detail.reason}</td>
                                       <td className='back1'>{detail.price}</td>
                                       <td className='back1'>{detail.paymentStatus}</td>
     
            <td className='back1'>
            <button className="buttonVG"
              onClick={ () => this.handleLogin1(detail.price)} 
              
            >
             
             <span>Pay</span>
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

export default ViewAllContactUs;