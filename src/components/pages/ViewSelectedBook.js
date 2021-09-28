import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewSelectedBook.css';
import CardItem from "../CardItem";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';
class ViewSelectedBook extends Component {

    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            author: '',
            category: '',
            description: ''
           
        }   
    }

    componentDidMount(){
        authService.getBooksByID(this.state.id).then(  (res) =>{
            let book = res.data;
            this.setState({author: book.id,
                category: book.author,
                description : book.title,
                image:book.imageOfVideo
            });
        
        });
        
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
          
          value={this.state.Message}
              
             
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
         <p className="para2">Status :</p>
         <p className="category2">Status :<span ></span>Available</p>
         
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                  <button class="button1"
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
              This book is available online<br></br> if you want this book to read, Click below link <br></br> <a href='registerUserselection'>here</a>
            </span>
                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
              
              </div>
              </div>
        );
    }
}

export default ViewSelectedBook;