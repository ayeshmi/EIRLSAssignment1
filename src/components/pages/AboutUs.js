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
   this.handleSearch=this.handleSearch.bind(this);
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
      numberOfPAges:book.numberOfPages
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

handleSearch(e){
    
    
  this.props.history.push(`/viewAllBookReservationAdvance/${this.state.id}`);
    window.location.reload();

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
                <h2 id="headerTitle">About US</h2>
                <div className="rowBook">
                <img src='images/books-1617327_1920.jpg'
                  className="image"></img>
                <p className="description"> History<br></br>
Launched in September 2000, BookLender.com is the oldest online book rental service. Founded by veteran business-men Douglas Ross and Andrew Bilinski, BookLender set out to revolutionize the way consumers acquired reading materials online. Oprah Magazine said BookLender is the book version of Netflix. Originally launched as a paperback book rental service of bestselling paperback fiction books, BookLender has expanded into children's books, nonfiction books, and audiobooks. Since 2000, BookLender has grown its selection from 25,000 titles to over a quarter of a million titles.</p>
                </div>
                <br></br>
                <div className="rowBook2">
                <p className="para1">Location :</p>
                <p className="para2">Giving Back :</p>
                <p className="para2">Fun Facts :</p>
                <p className="category1"><span ></span>Located just outside of Washington, D.C. in tech rich Northern Virginia, BookLender is strategically located near one of the country's largest book distribution warehouses (Ingram Book Group), and a USPS bulk mail center.</p>
                <p className="category2"><span ></span>BookLender donates overstock titles to Walter Reed Medical Center and is proud to support our wounded warriors. BookLender also donates books to various libraries.</p>
                <p className="category2"><span ></span>BookLender has delivered over 4 million titles to its members
BookLender has saved its members over $30 million to date
Launched in 2000, BookLender is the oldest book rental service
BookLender is the only service to offer books and audiobooks
BookLender.com is proudly maintained by Vive le Livre LLC (that's French for "Long Live the Book!'), a Quirkus Inc. company</p>
                </div>
                
                <br></br>
                <br></br>
               
              </Form>
        
              </div>
              </div>
              
        );
}

}