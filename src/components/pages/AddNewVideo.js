import './AddNewVideo.css';
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
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const options = [
    { value: "hello", label: "hello1" },
    { value: "hello", label: "hello"},
    { value: "hello", label: "hello" },
    { value: "hello", label: "hello" },
    { value: "hello", label: "hello"},
    { value: "hello", label: "hello" },
  ];

export default class AddNewBook extends Component {
  
  constructor(props) {
    
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor=this.onChangeAuthor.bind(this);
    this.onChangeEdition=this.onChangeEdition.bind(this);
    this.onChangeIsbn=this.onChangeIsbn.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
    this.onChangePrice1=this.onChangePrice1.bind(this);
    this.onChangeNumberofCopies=this.onChangeNumberofCopies.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.onChangeBookdes=this.onChangeBookdes.bind(this);
    this.UplaodVideo=this.UplaodVideo.bind(this);
    this.onChangeAgeLimitation=this.onChangeAgeLimitation.bind(this);
    this.onChangePrice=this.onChangePrice.bind(this);
    this.onChangePublishedYear=this.onChangePublishedYear.bind(this);
    
    
    this.state = {
      category:"",
      title:"",
      author:"",
      edition:"",
      isbnNumber:"",
      price:"",
      numberOfCopies:"",
      date:"",
      Message:"",
      ageLimitation:"",
      price:"",
      publishedYear:"",
      numberOfCopies:"",
      
  
    };
  }

  notify (){
 
    // Calling toast method by passing string
    toast.success(this.state.message)
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

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    });
  }



  onChangeAgeLimitation(e) {
    this.setState({
      ageLimitation: e.target.value
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
  onChangeIsbn(e) {
    this.setState({
      isbnNumber: e.target.value
    });

  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });

  }
  onChangePrice1(e) {
    this.setState({
      price1: e.target.value
    });

  }
  onChangeDescription(e) {
    this.setState({
      Message: e.target.value
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

 
  
  
  UplaodVideo(e){
    this.props.history.push(`/addVideo`);
}

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.addVideoDetails(
        this.state.category,
        this.state.date,
        this.state.price,
        this.state.title,
        this.state.ageLimitation,
        this.state.author,
        this.state.publishedYear,
        this.state.numberOfCopies,
        this.state.price1,
        
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
          toast.error(this.state.message)
        }
      );
    }
  }
  

render() {
 
    //const { category } = this.state;
  return (
    <div className="body">
      <img className='form-img12' src='images/Untitled Design (1).jpg' alt='spaceship' />
    
      
<div className="form33">
        <Form class="row23"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle23">Add New Video</h2>
            
<div className='rowAddVideo'>
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
            placeholder="Enter video author"
              type="text"
              name="date"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              validations={[required]}
            />
</div>

<div className='rowAddVideo'>
            <label >Number Of Copies</label>
            <label >Date</label>
            <Input
            placeholder="Enter number of copies"
              type="number" 
              name="title"
              value={this.state.numberOfCopies}
              onChange={this.onChangeNumberofCopies}
              validations={[required]}
            />
            
            
            <Input        
            placeholder="Enter your birthday"
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChangeDate}
              validations={[required]}
            />
</div>

<div className='rowAddVideo'>
            <label >Published Year</label>
            <label >Price (Rs.)</label>
      <Input        
      placeholder="Enter movie published year"
        type="number"
        name="date"
        value={this.state.publishedYear}
        onChange={this.onChangePublishedYear}
        validations={[required]}
      />

<Input
            placeholder="Enter movie price"
              type="number" 
              name="inumber"
              value={this.state.price1}
              onChange={this.onChangePrice1}
              validations={[required]}
              size={13}
            />
            </div>

<div className='rowAddVideo'>
      <label>Category</label>
      <label>18+ video or not</label>
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

     

<FormControl >
<InputLabel id="demo-simple-select-label">Select answer</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={this.state.ageLimitation}
  onChange={this.onChangeAgeLimitation}  
  className="formItem"
  placeholder="Select category"
>
  <MenuItem value={"Yes"}>Yes</MenuItem>
  <MenuItem value={"No"}>No</MenuItem>
  
</Select>
</FormControl>
</div>
      <label >Description</label>
          
          <TextField
          className="textField1"
       id="standard-multiline-static"
       name="Message"
       multiline
       rows={6}
       placeholder="Enter book description"
       value={this.state.price}
           onChange={this.onChangePrice}
           validations={[required]}
     />




            
  
<br></br>
          <div className="form-group">
            <button class="row"
              className="btn btn-primary btn-block"
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Add Video</span>
            </button>
            <br></br>
            <br></br>
          </div>
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