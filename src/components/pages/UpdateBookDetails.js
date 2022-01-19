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
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger alertClass" role="alert">
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
    this.onChangeBExcerpt=this.onChangeBExcerpt.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
    this.onChangePublishedYear=this.onChangePublishedYear.bind(this);
    this.onChangeNumberOfPaged=this.onChangeNumberOfPaged.bind(this);
    this.state = {
      category:"",
      title:"",
      author:"",
      edition:"",
      price:"",
      numberOfCopies:"",
      date:"",
      bDes:"",
      inumber:"",
      bExcerpt:"",
      price:"",
      publishedYear:"",
      numberOfPages:""
  
    };
  }

  onChangeBExcerpt(e) {
    this.setState({
      bExcerpt: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangePublishedYear(e) {
    this.setState({
      publishedYear: e.target.value
    });
  }

  onChangeNumberOfPaged(e) {
    this.setState({
      numberOfPages: e.target.value
    });
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
  
  notify (){
 
    // Calling toast method by passing string
    toast(this.state.message)
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
        this.state.numberOfCopies,
        this.state.date,
        this.state.bDes,
        this.state.bExcerpt,
        this.state.price,
        this.state.publishedYear,
        this.state.numberOfPages
        
        
        //this.state.description
        
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
  }
  

render() {
 
    //const { category } = this.state;
  return (
    <div className="bodyAddNew">
      <img className='form-img123' src='images/Untitled Design (1).jpg' alt='spaceship' />
    
      
<div className="form22">
        <Form class="row23"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle23">Add New Book</h2>
            
<div className='rowAddBook'>
            <label >Title</label>
            <label >Author</label>
            <Input
            placeholder="Enter book title"
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
              validations={[required]}
            />
         
         
            <Input
            placeholder="Enter book author"
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              validations={[required]}
            />
</div>
<div className='rowAddBook'>
         <label >ISBN </label> 
         <label>Number of Copies</label>
            <Input
            placeholder="Enter book ISBN"
              type="number" 
              name="inumber"
              value={this.state.inumber}
              onChange={this.onChangeIsbn}
              validations={[required]}
              size={13}
            />
        

<Input
            placeholder="Enter number of copies"
              type="number" 
              name="inumber"
              value={this.state.numberOfCopies}
              onChange={this.onChangeNumberofCopies}
              validations={[required]}
            />
            </div>

            <div className='rowAddBook'>
            <label >Date</label>
            <label >Price (Rs.)</label>
      <Input        
      placeholder="Enter date of today"
        type="date"
        name="date"
        value={this.state.date}
        onChange={this.onChangeDate}
        validations={[required]}
      />

<Input
            placeholder="Enter book price"
              type="number" 
              name="inumber"
              value={this.state.price}
              onChange={this.onChangePrice}
              validations={[required]}
              size={13}
            />
            </div>

            <div className='rowAddBook'>
         <label >Number Of Pages </label> 
         <label>Published Year</label>
            <Input
            placeholder="Enter number of pages"
              type="number" 
              name="inumber"
              value={this.state.numberOfPages}
              onChange={this.onChangeNumberOfPaged}
              validations={[required]}
              size={13}
            />
        

<Input
            placeholder="Enter published year"
              type="number" 
              name="inumber"
              value={this.state.publishedYear}
              onChange={this.onChangePublishedYear}
              validations={[required]}
            />
            </div>

            
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
      <br></br>
      

      <label >Description</label>
          
          <TextField
          className="textField1"
       id="standard-multiline-static"
       name="Message"
       multiline
       rows={6}
       placeholder="Enter book description"
       value={this.state.bDes}
           onChange={this.onChangeBookdes}
           validations={[required]}
     />

<label >Book Excerpt </label>
          
          <TextField
          className="textField1"
       id="standard-multiline-static"
       name="bExcerpt"
       multiline
       rows={6}
       placeholder="Enter book excerpt"
       value={this.state.bExcerpt}
           onChange={this.onChangeBExcerpt}
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