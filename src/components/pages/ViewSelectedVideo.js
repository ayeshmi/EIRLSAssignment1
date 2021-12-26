import './ViewSelectedVideo.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import TextField from '@material-ui/core/TextField';
import CheckButton from "react-validation/build/button";
import { data } from 'jquery';
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

export default class ViewSelectedBook extends Component {
  
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleComment=this.handleComment.bind(this);
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
      message: "",
      price:"",
      publishedYear:"",
      bookExcerpt:"",
      numberOfPAges:""
  };
  }



  componentDidMount(){
    AuthService.getVideoByID(this.state.id).then(  (res) =>{
        let book = res.data;
        this.setState({author: book.author,
            category: book.category,
           description : book.title,
            image:book.imageOfVideo,
            message:book.description,
            price:book.price,
      publishedYear:book.year,
      bookExcerpt:book.bookExcerpt,
      numberOfPAges:book.ageLimitation
        });
    
    });


    AuthService.getAllCommentByID(this.state.id).then((res) => {
      this.setState({comments:res.data});
});
    
     let user = AuthService.getCurrentUser(); 
     this.state.currentUser=user.username;
}

onChangeComment(e) {
  this.setState({
    comment: e.target.value,

  });
 
}

handleComment(e){
  
    AuthService. addCommentBook(
      this.state.currentUser,
      this.state.comment,
      "Video",
      this.state.id
      
    );
 
  

}

handleSearch(e){
    
    
    this.props.history.push(`/viewAllVideoReservationAdvance/${this.state.id}`);
      window.location.reload();

}

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    
      let user= AuthService.getCurrentUser();
      AuthService. addNewVideoReservation(
        this.state.description,
        user.email,
        user.id,
        this.state.id
        
      ).then(
        
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

  notify (){
 
    // Calling toast method by passing string
    toast(this.state.message)
}

render() {
  
  return (
    
    <div >
          <div className="form23"> 
              <Form className="row2"
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
                <div className="rowVideo2">
                <p className="para1">Author :</p>
                <p className="para2">Category :</p>
                <p className="para2">Price :</p>
                <p className="para2">18+ movie :</p>
                <p className="category1"><span ></span>{this.state.author}</p>
                <p className="category2"><span ></span>{this.state.category}</p>
                <p className="category2"><span ></span>Rs. {this.state.price}.00</p>
                <p className="category2"><span ></span>{this.state.numberOfPAges}</p>
                </div>
                <br></br>
                <br></br>
      
                </Form>
               
<div className="rowBook">  
         <p>Depend on your user type, you can lend this video for a given period, If you want to lend this video click on the bellow button</p>
         <p>You can order this video via our company, If you want to order this video click on the bellow button</p>
                  <button className='lendingButton' onClick={this.handleLogin}>LEND</button>
          
                  
                  <button className='lendingButton' onClick={this.handleSearch}>ORDER</button>
                  </div>
                  <br></br>
                  <br></br>
                <span className='form-input-login'>
              This book is available online<br></br> if you want this book to read, Click below link  <a href='registerUserselection'>here</a>
            </span>
          

                <br></br>
                <br></br>
               
              
             
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
           <button className="commentButton" >Post</button>
           <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>View All Comments..</th>
                               
                           </tr>
                           
                       </thead>
                       
                       <tbody>
                           {
                               this.state.comments.map(
                                   comment1 =>
                                   <tr key={comment1.id}>
                                       <td>{comment1.username}:{comment1.commentDetails}</td> 
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

               </div>
             </Form>
              </div>
              </div> 
              
        );
}

}