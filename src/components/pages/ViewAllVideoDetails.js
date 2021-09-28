import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllUserDetails.css';

class viewAllVideoDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            Videos: []
        }   
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
               <div className="rowV">
                   <table className="table table-striped table-boordered">
                       <thead>
                           <tr>
                               <th>Video Title</th>
                               <th>Video Category</th>
                               <th>Uploaded Date</th>
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
                                       <td>{video.date}</td>
                                       <td>
                                       <button className="buttonV"
              
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