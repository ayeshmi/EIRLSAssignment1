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

    DeleteContact(id){
        authService.deleteContactUsDetailsById(id).then(
        
            response => {
              this.setState({
                message: response.data.message,
                successful: true
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

componentDidMount(){
    authService.getAllContactUsDetails().then((res) => {
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
              onClick={ () => this.ReplyContact(detail.id)}
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
              onClick={ () => this.DeleteContact(detail.id)} 
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