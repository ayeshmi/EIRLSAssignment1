import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
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

class viewAllVideoDetails extends Component {

    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state={
            
            Videos: []
        }   
    }

    notify (){
 
        // Calling toast method by passing string
        toast(this.state.message)
    }

    onChangeSearch(e) {
        this.setState({
          search: e.target.value
        });
      }

    handleSearch(e){
    
        const h1=this.state.search;
        this.props.history.push(`/searchBookResultVV/${h1}`);
          window.location.reload();
    
    }

    DeleteVideo(id){
        authService. deleteVideoById(id).then(
        
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

componentDidMount(){
    authService.getVideos().then((res) => {
          this.setState({Videos:res.data});
    });
}

    render() {
        return (
            <div>
               <h2 id="headerTitle1">User List</h2> 
            <br></br>
            <Form
             onSubmit={this.handleSearch}
             ref={c => {
               this.form = c;
             }}>
             <div>
             
            <Input
              placeholder="Search By Title, Author or Keyword"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.onChangeSearch}
              validations={[required]}
              className="searchTextFieldVB" 
            />
            
           </div>
           <button className="commentButtonViewAll" onClick={this.handleSearch}>Search</button>
           <CheckButton
            style={{ display: "none" }}
            ref={c => {
              this.checkBtn = c;
            }}/>
          
             </Form> 
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Video Title</th>
                               <th>Video Category</th>
                               <th>Published Year</th>
                               <th>Number of Copies</th>
                               <th>Action</th>
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.Videos.map(
                                   video =>
                                   <tr key={video.id}>
                                       <td>{video.title}</td>
                                       <td>{video.category}</td>
                                       <td>{video.year}</td>
                                       <td>{video.numberOfCopies}</td>
                                       <td>
                                       <button className="buttonV"
               onClick={ () => this.DeleteVideo(video.id)} 
              disabled={this.state.loading}
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
             <span>Delete</span>
            </button>
            </td>
                                       
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

               </div>
            </div>
        );
    }
}

export default viewAllVideoDetails;