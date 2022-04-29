import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
import {Link} from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.state={
            id:this.props.match.params.bookID,
            name:this.props.match.params.name,
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
onChangeStartDate(e) {
  this.setState({
    startDate: e.target.value
  });
}

notify (){
 
  // Calling toast method by passing string
  toast.success(this.state.message)
}

handleLogin(e) {
  e.preventDefault();

  this.setState({
    message: "",
    loading: true
  });

  this.form.validateAll();

  if (this.checkBtn.context._errors.length === 0) {
    authService.advanceBookReservation(this.state.bookID,this.state.bookName, this.state.email,this.state.startDate).
  then(
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
      toast.error(this.state.message);
    }
  );
}
}


    render() {
        return (
            <div>
               <h2 id="headerTitle1">Advance Book Lendings</h2> 
            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th className='back2'>Book Name</th>
                               <th className='back2'>Lend Date</th>
                               <th className='back2'>Return Date</th>
                              
                              
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.reservations.map(
                                reservation =>
                                   <tr key={reservation.id}>
                                       <td className='back1'>{reservation.bookName}</td>
                                       <td className='back1'>{reservation.date}</td>
                                       <td className='back1'>{reservation.returnDate}</td>
                                       
                 
                                       
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

                   <div >
     
     <div className="form3"> 
         <Form className="row1234"
           onSubmit={this.handleLogin}
           ref={c => {
             this.form = c;
           }}
         >
             <h2 id="headerTitle">Advance Book Reservation</h2>
             
             <label >Book Name</label>
             
             <Input
             placeholder="Enter book name"
               type="text"
               name="bookName"
               value={this.state.name}
               onChange={this.onChangeBookName}
               validations={[required]}
               disabled
             />
          
 
          
             <label htmlFor="email">Email</label>
             <Input
               
               placeholder="Enter user email"
               type="text"
               name="email"
               value={this.state.email}
               onChange={this.onChangeEmail}
               validations={[required]}
               disabled
             />
 
         <label>Lending Start Date</label>
             <Input
            
             placeholder="Select lending start date"
               type="date"
            
               name="startDate"
               value={this.state.startDate}
               onChange={this.onChangeStartDate}
               validations={[required]}
             />
 
              
             
           <br></br>
 
           
             <button class="button1"
               className="btn btn-primary btn-block"
               disabled={this.state.loading}
             >
               {this.state.loading && (
                 <span className="spinner-border spinner-border-sm"></span>
               )}
              <span>Submit</span>
             </button>
           <br></br>
        
        
           <CheckButton
             style={{ display: "none" }}
             ref={c => {
               this.checkBtn = c;
             }}
           />
         </Form>
         
         </div>
         </div>


               </div>
            </div>
            
        );
    }
}

export default ListEmployeeComponent;