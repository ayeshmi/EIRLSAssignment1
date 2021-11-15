import './ViewSelectedBook.css';
import React, { Component } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import TextField from '@material-ui/core/TextField';
import CheckButton from "react-validation/build/button";
import { data } from 'jquery';



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
      comments: []  
  };
  }



  componentDidMount(){
    AuthService.getBooksByID(this.state.id).then(  (res) =>{
        let book = res.data;
        this.setState({author: book.id,
            category: book.author,
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
        user.username,
        user.username,
        user.id
        
      );
    } else {
      this.setState({
        loading: false
      });
    }
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
                  <img src={this.state.image}
                  className="image"></img>
        
       
             <TextField
          className="textField23"
          name="Message"
          multiline
          rows={7}
          value={this.state.message}    
        />
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
         <p className="para1">Status :</p>
         <p className="category1">Status :<span ></span>Available</p>
         <br></br>
         <br></br>
         <br></br>
         <p className="para2">Status :</p>
         <p className="category2">Status :<span ></span>Available</p>
         
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                  <button class="buttonReservationBook"
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                   <span>Borrow </span>
                  </button>
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