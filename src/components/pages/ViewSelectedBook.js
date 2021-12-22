import './ViewSelectedBook.css';
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
            message:book.bookDescription
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
  if (this.checkBtn.context._errors.length === 0) {
    AuthService. addCommentBook(
      this.state.currentUser,
      this.state.comment,
      "Book",
      this.state.id
      
    );
  } else {
    this.setState({
      loading: false
    });
  }
  

}

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      let user= AuthService.getCurrentUser();
      AuthService. addNewBookReservation(
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
    } else {
      this.setState({
        loading: false
      });
    }
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
                <div className="rowBook2">
                <p className="para1">Author :</p>
                <p className="para2">Category :</p>
                <p className="para2">Status :</p>
                <p className="category1"><span ></span>{this.state.author}</p>
                <p className="category2"><span ></span>{this.state.category}</p>
                <p className="category2"><span ></span>{this.state.category}</p>
                </div>
                <br></br>
                <div className="rowBook2">
                <p className="description">ISBN : </p>
                <p className="para1">Pages :</p>
                <p className="para2">Published :</p>
                <p className="category1"><span ></span>{this.state.author}</p>
                <p className="category2"><span ></span>{this.state.category}</p>
                <p className="category2"><span ></span>{this.state.category}</p>
                </div>
     
             <br></br>
             <br></br>
             <br></br>
                <p className="description">Book Excerpt : </p>
                <p className="paragraph">was warmly discussed, which procured it a high reputation. It rallied round it a certain number of partisans. The solution it proposed gave, at least, full liberty to the imagination. The human mind delights in grand conceptions of supernatural beings. And the sea is precisely their best vehicle, the only medium through which these giants (against which terrestrial animals, such as elephants or rhinoceroses, are as nothing) can be produced or developed.
The industrial and commercial papers treated the question chiefly from this point of view. The Shipping and Mercantile Gazette, the Lloyd's List, the Packet-Boat, and the Maritime and Colonial Review, all papers devoted to insurance companies which threatened to raise their rates of premium, were unanimous on this point. Public opinion had been pronounced. The United States were the first in the field; and in New York they made preparations for an expedition destined to pursue this narwhal. A frigate of great speed, the Abraham Lincoln, was put in comm</p>
               
<div className="rowBook">  
         <p>Depend on your user type, you can lend this book for a given period, If you want to lend this book click on the bellow button</p>
         <p>You can order this book via our company, If you want to order this book click on the bellow button</p>
                  <button className='lendingButton'>LEND</button>
                  <button className='orderButton'>ORDER</button>
                  </div>
                  <br></br>
                  <br></br>
                <span className='form-input-login'>
              This book is available online<br></br> if you want this book to read, Click below link  <a href='registerUserselection'>here</a>
            </span>
               
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />

                <br></br>
                <br></br>
               
              </Form>
             
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