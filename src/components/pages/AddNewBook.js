import './AddNewBook.css';
import React, { Component,useState } from "react";
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from 'react-select';
import CheckButton from "react-validation/build/button";

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
    this.onChangeNumberofCopies=this.onChangeNumberofCopies.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.state = {
      category:"",
      title:"",
      author:"",
      edition:"",
      isbnNumber:"",
      price:"",
      numberOfCopies:"",
      date:""
    };
  }

 

  onChangeCategory(e) {
    this.setState({
      category: e.target.value
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
        this.state.edition,
        this.state.isbnNumber,
        this.state.price,
        this.state.numberOfCopies,
        this.state.date
        
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
    const { category } = this.state;
  return (
    <div >
      <img className='form-img' src='images/boy-reading.svg' alt='spaceship' />
<div className="form2">
        <Form class="row"
          onSubmit={this.handleLogin}
          ref={c => {
            this.form = c;
          }}
        >
            <h2 id="headerTitle">Add New Book</h2>
          
            <label >Category</label>

           <div className="Select">

 <select   value={this.state.category} options={options} onChange={this.onChangeCategory} >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))} 
          </select>
          
          </div>
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

<label >Edition</label>

<select  value={this.state.edition} onChange={this.onChangeEdition} >
            {options.map((option) => (
              
              <option value={option.value} onChange={this.onChangeEdition}>{option.label}</option>
            ))}
          </select>
            <label >ISBN Number</label>
            <Input
           
            placeholder="Enter book ISBN"
              type="text"
              name="isbn"
              value={this.state.isbnNumber}
              onChange={this.onChangeIsbn}
              validations={[required]}
            />
            <label >Price</label>
            <Input
           
            placeholder="Enter book price"
              type="text"
           
              name="price"
              value={this.state.price}
              onChange={this.onChangePrice}
              validations={[required]}
            />
            
            <label >Number of copies</label>

            <select value={this.state.numberOfCopies} onChange={this.onChangeNumberofCopies}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

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