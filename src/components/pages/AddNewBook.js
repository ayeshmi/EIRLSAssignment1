import './AddNewBook.css';
import React, { Component,useState } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Link} from 'react-router-dom';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


export default class AddNewBook extends Component {
  
  constructor(props) {
    
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor=this.onChangeAuthor.bind(this);
    this.onChangeEdition=this.onChangeEdition.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
    this.onChangeNumberofCopies=this.onChangeNumberofCopies.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.onChangeBookdes=this.onChangeBookdes.bind(this);
    this.onChangeIsbn=this.onChangeIsbn.bind(this);
    this.state = {
      category:"",
      title:"",
      author:"",
      edition:"",
      price:"",
      numberOfCopies:"",
      date:"",
      bDes:"",
      inumber:""
  
    };
  }

 

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }
  onChangeIsbn(e) {
    this.setState({
      inumber: e.target.value
    });
  }
  onChangeBookdes(e){
    this.setState({
      bDes:e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }


  onChangeEdition(e) {
    this.setState({
      edition: e.target.value
    });

  }
 
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });

  }
 
  onChangeNumberofCopies(e) {
    this.setState({
      numberOfCopies: e.target.value
    });

  }
  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });

  }
  

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.addNewBook(
        this.state.category,
        this.state.title,
        this.state.author,
        this.state.inumber,
        this.state.price,
        this.state.numberOfCopies,
        this.state.date,
        this.state.bDes
        
        //this.state.description
        
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
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
        }
      );
    }
  }
  

render() {
 
    //const { category } = this.state;
  return (
    <div className="body">
      <img className='form-img12' src='images/Untitled Design (1).jpg' alt='spaceship' />
    
      
<div className="form22">
        <Form class="row23"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle23">Add New Book</h2>
            

            <label >Title</label>
            
            <Input
            placeholder="Enter book title"
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
              validations={[required]}
            />
         
         <label >Author</label>
            <Input
            placeholder="Enter book author"
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              validations={[required]}
            />

         <label >ISBN </label> 
            <Input
            placeholder="Enter book ISBN"
              type="text" 
              name="inumber"
              value={this.state.inumber}
              onChange={this.onChangeIsbn}
              validations={[required]}
            />
        
      <label>Category</label>

        <FormControl >
        <InputLabel id="demo-simple-select-label">Select Book Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.category}
          onChange={this.onChangeCategory}  
          className="formItem"
          placeholder="Select category"
        >
          <MenuItem value={"Action and Adventure"}>Action and Adventure</MenuItem>
          <MenuItem value={"Anthology"}>Anthology</MenuItem>
          <MenuItem value={"Classic"}>Classic</MenuItem>
          <MenuItem value={"Comic and Graphic Novel"}>Comic and Graphic Novel</MenuItem>
          <MenuItem value={"Crime and Detective"}>Crime and Detective</MenuItem>
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Fairy Tale"}>Fairy Tale</MenuItem>
          <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
          <MenuItem value={"Historical Fiction"}>Historical Fiction</MenuItem>
          <MenuItem value={"Horror"}>Horror</MenuItem>
          <MenuItem value={"Humor"}>Humor</MenuItem>
          <MenuItem value={"Legend"}>Legend</MenuItem>
          <MenuItem value={"Romance"}>Romance</MenuItem>
          <MenuItem value={"Short Story"}>Short Story</MenuItem>
          <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
          <MenuItem value={"Mystery"}>Mystery</MenuItem>
        </Select>
      </FormControl>

      <label >Description</label>
          
          <TextField
          className="textField1"
       id="standard-multiline-static"
       name="Message"
       multiline
       rows={6}
       placeholder="Enter your message"
       value={this.state.price}
           onChange={this.onChangePrice}
           validations={[required]}
     />

<label>Number of Copies</label>
<FormControl >
<InputLabel id="demo-simple-select-label"
className="selectionLable">Select Book Category</InputLabel>  
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.numberOfCopies}
          onChange={this.onChangeNumberofCopies}  
          className="formItem"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

            <label >Date</label>
            <Input        
            placeholder="Enter your birthday"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChangeDate}
              validations={[required]}
            />
            
          
     

          <br></br>
          <br></br>

          <div className="form-group">
            <button class="row"
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Add Book</span>
            </button>
            <br></br>
           
          </div>
<br></br>
<Link to={'/addBookImage/'+this.state.title} className='nav-links'>
                          Upload video image here
                      </Link>
                      <br></br>
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