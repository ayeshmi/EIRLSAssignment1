import './ViewSelectedBook.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import TextField from '@material-ui/core/TextField';
import CheckButton from "react-validation/build/button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button } from 'react-bootstrap';
import { red } from '@material-ui/core/colors';
import { left } from 'glamor';
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


  


export default class ViewSelectedBook extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogin2 = this.handleLogin2.bind(this);
    this.handleLogin3 = this.handleLogin3.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
   this.handleSearch=this.handleSearch.bind(this);
    this.handleComment=this.handleComment.bind(this);
    this.addOrder=this.addOrder.bind(this);
   this.addNewBook=this.addNewBook.bind(this);
    this.state={
      id:this.props.match.params.id,
      author: '',
      category: '',
      description: " ",
      username:'',
      user:'',
      comment:"",
      currentUser:"",
      comments: []  ,
      message1: "",
      price:"",
      publishedYear:"",
      bookExcerpt:"",
      numberOfPAges:"",
      userID:"",
      bookID:"",
      open:false,
       showMessage: false,
       role:"",
       inumber: "",
       message: ""
  };
  }



  componentDidMount(){
    AuthService.getBooksByID(this.state.id).then(  (res) =>{
        let book = res.data;
        this.setState({author: book.author,
            category: book.category,
           description : book.title,
            image:book.imageOfVideo,
            message:book.bookDescription,
            price:book.price,
      publishedYear:book.year,
      bookExcerpt:book.bookExcerpt,
      numberOfPAges:book.numberOfPages,
      bookID:book.id,
      inumber:book.inumber
        });
    
    });


    AuthService.getAllCommentByID(this.state.id).then((res) => {
      this.setState({comments:res.data});
});
    
     let user = AuthService.getCurrentUser(); 
     this.state.currentUser=user.username;
     this.state.userID=user.id;
     this.state.role=user.roles;
}




onChangeComment(e) {
  this.setState({
    comment: e.target.value,

  });
 
}

handleComment(e){
  if (this.checkBtn.context._errors.length === 0) {
    AuthService. addCommentBook(
      this.state.currentUser,
      this.state.comment,
      "Book",
      this.state.id,
      this.state.userID
      
    );
  } else {
    this.setState({
      loading: false
    });
  }
  

}

handleSearch(e){
    
    
  this.props.history.push(`/viewAllBookReservationAdvance/${this.state.id}`);
    window.location.reload();

}
replyComment(e){
  alert("hello");
}
addOrder(e){
  AuthService.addBookOrder(this.state.bookID,this.state.userID,this.state.price);
  this.props.history.push(`/viewAllBookReservationAdvance/${this.state.id}`);
  window.location.reload();
}

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message1: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      let user= AuthService.getCurrentUser();
      AuthService. addNewBookReservation(
        this.state.description,
        user.email,
        user.id,
        this.state.id,
        this.state.image
        
        
      ).then(
        
        response => {
          this.setState({
            message1: response.data.message,
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
            message1: resMessage
          });
          toast.error(this.state.message1);
        }
        
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  handleLogin2(e) {
    e.preventDefault();

    this.setState({
      message1: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      let user= AuthService.getCurrentUser();
      AuthService. addNewBookReservationOnline(
        this.state.description,
        user.email,
        user.id,
        this.state.id,
        this.state.image
        
        
      ).then(
        
        response => {
          this.setState({
            message1: response.data.message,
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
            message1: resMessage
          });
          toast.error(this.state.message1);
        }
        
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  handleLogin3(e) {
    e.preventDefault();

    this.setState({
      message1: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      let user= AuthService.getCurrentUser();
      AuthService.  addNewBookOrder(
        this.state.description,
        user.email,
        user.id,
        this.state.id,
        this.state.image
        
        
      ).then(
        
        response => {
          this.setState({
            message1: response.data.message,
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
            message1: resMessage
          });
          toast.error(this.state.message1);
        }
        
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  notify (){
 
    // Calling toast method by passing string
    toast.success(this.state.message1)
}

addNewBook(id){
    
  
  this.props.history.push(`/viewAllBookReservationAdvance/${id}/${this.state.description}`);
    window.location.reload();

}

_showMessage = (bool) => {
  this.setState({
    showMessage: bool
  });
}
deleteComment(id){
if(this.state.role =='ROLE_USER'){
  AuthService.deleteCommentByID(id,this.state.userID);
}
else{
  AuthService.deleteInaapropiateComment(id);
}

}

render() {
  
  return (
    
    <div >
          <div className="form23"> 
              <Form 
                onSubmit={this.handleLogin}
                ref={c => {
                  this.form = c;
                }}
              >
                <h2 id="headerTitle">{this.state.description}</h2>
                <div className="rowBook">
                <img src={this.state.image}
                  className="image"></img>
                <p className="description">{this.state.message} </p>
                </div>
                <br></br>
                <div className="rowBook2 row2">
                <p className="para1">Author :</p>
                <p className="para2">Category :</p>
                <p className="para2">Price :</p>
                <p className="category1"><span ></span>{this.state.author}</p>
                <p className="category2"><span ></span>{this.state.category}</p>
                <p className="category2"><span ></span>Rs. {this.state.price}.00</p>
                </div>
                <br></br>
                <div className="rowBook2 row2">
                <p className="description">ISBN -13 : </p>
                <p className="para1">Pages :</p>
                <p className="para2">Published :</p>
                <p className="category1"><span ></span>{this.state.inumber}</p>
                <p className="category2"><span ></span>{this.state.numberOfPAges}</p>
                <p className="category2"><span ></span>{this.state.publishedYear}</p>
                </div>
                
            
             <br></br>
             <br></br>
             <div className='row2'>
                <p className="description">Book Excerpt : </p>
                <p className="paragraph ">{this.state.bookExcerpt}</p>
                </div>
                <table>
                       <thead>
                           <tr>
                               <th className='back2' >Depend on your user type, you can lend this book for a given period, If you want to lend this book click on the bellow button</th>
                               <th  className='back2'>You can order this book via our website, If you want to order this book click on the bellow button</th>
                               <th  className='back2'>You can read this book onlie, If you want to lend this book click on the bellow button</th>
                               <th  className='back2'>If this is not available, you can go to advance lending this book for a given period, If you want to lend this book click on the bellow button </th>
                            
                           </tr>
                           
                       </thead>
                       <tbody>
                           
                                   <tr >
                                       
                                       <td className='back1'> <button className="buttonVB3"
              onClick={this.handleLogin}
              disabled={this.state.loading} 
             
            >
            
              
             <span>LEND</span>
            </button></td>
                                       <td className='back1'> <button className="buttonVB"
              onClick={this.handleLogin2}
              disabled={this.state.loading} 
             
            >
             
              
             <span>LEND ONLINE BOOK</span>
            </button></td>
                                       <td className='back1'>
                                       <button className="buttonVB3"
              onClick={this.handleLogin3}
              disabled={this.state.loading} 
             
            >
             
              
             <span>ORDER BOOK</span>
            </button>
            </td>
                                       <td className='back1'>
                                       <button className="buttonVB"
            onClick={()=>this.addNewBook(this.state.id)}
              disabled={this.state.loading}
            >
        
              
              
             <span>ADVANCE LEND</span>
            </button>
            </td>
                                       
                                   </tr>
                               
                           
                       </tbody>
                   </table>
 
               
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />

                <br></br>
                <br></br>
                </Form>
             
             <h1>Give your feedbacks........</h1>
             <Form
             
             onSubmit={this.handleComment}
             ref={c => {
               this.form = c;
             }}>
             <div>
                <TextField
                placeholder="Enter your comment here"
             className="textFieldComment"
             name="Comment"
             multiline
             rows={3}
             value={this.state.onChangeComment}
             onChange={this.onChangeComment}
             />
            
           </div>
           <button className="commentButton" >POST</button>
           </Form>
           <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                               <th style={{ backgroundColor:'#77b5fe',alignContent:'center',color:'white',fontSize:'20px' }}>View All Comments...</th>
                               
                           </tr>
                           
                       </thead>
                       
                       <tbody>
                           {
                               this.state.comments.map(
                                   comment1 =>
                                   <tr key={comment1.commentID}>
                                       <td className='back1'>{comment1.username}:{comment1.commentDetails}
                                       
                                       <button className='commentReply' style={{ backgroundColor:'red',borderBlockColor:'white',borderColor:'white'}} onClick={() => this.deleteComment(comment1.commentID)}><img src="https://image.flaticon.com/icons/png/512/61/61848.png" className='deleteComment' onClick={this._showMessage.bind(null, true)}>
                                       </img></button>
                           
                                       
                       </td>
                                      
                                   </tr>
                                  
                               )
                               
                           }
                         
                       </tbody>
                   </table>
 
               </div>
             
      
             
              </div>
              </div>
              
        );
}

}