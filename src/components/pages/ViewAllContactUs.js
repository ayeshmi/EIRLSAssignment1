import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';

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

componentDidMount(){
    authService.getAllContactUsDetails().then((res) => {
          this.setState({ContactUsDetails:res.data});
    });
}

    render() {
        return (
            <div>
               <h2 id="headerTitle1">ContactUs Details</h2> 
            <br></br>
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Email</th>
                               <th>Username</th>
                               <th>Date Of Birth</th>
                               <th>Action 1</th>
                               <th>Action 2</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.ContactUsDetails.map(
                                   detail =>
                                   <tr key={detail.id}>
                                       <td>{detail.email}</td>
                                       <td>{detail.message}</td>
                                       <td>{detail.name}</td>
                                       <td>
                                       <button className="buttonV"
              
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Reply</span>
            </button>
            </td>
            <td>
            <button className="buttonV"
              onClick={ () => this.ReplyContact(detail.id)} 
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

export default ViewAllContactUs;