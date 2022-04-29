import React, { Component } from "react";
import CardItem from "../CardItem";
import "./HomepageRegisteredUser.css";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import authService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  


export default class HomepageRegisteredUser extends Component {

    constructor(props){
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state={
            h1:this.props.match.params.serach,
            open:false,
            videos:[],
            searchResult:"",

            
         
        };
    }
   
    onChangeSearch(e) {
      this.setState({
        search: e.target.value
      });
    }

    handleSearch(e){
      e.preventDefault();

      if (this.checkBtn.context._errors.length === 0) {
        authService. searchUser(
          this.state.searchResult
        ).then(
          ()=>{
            this.props.history.push("/adminHomepage");
          window.location.reload();
          }

        );
      } else {
        this.setState({
          loading: false
        });
      }
      
    
    }

    handleClickOpen(e) {
        this.setState({
          open: true
        });
      }
      handleClose(e) {
        this.setState({
          open: false
        });
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

      
        authService.searchUser(this.state.h1).then((res) => {
          this.setState({videos:res.data});
        });
        
            }

    editEmployee(id){
      this.props.history.push(`searchBookResult/${id}`);
  }



    
    render() {          
            return (
                
                <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1">User List</h2> 
               <br></br><br></br>
              

            <br></br>
               <div className="rowV">
                   <table >
                       <thead>
                           <tr>
                           <th className='back2'> User ID</th>
                               <th className='back2'>Email</th>
                               <th className='back2'>Profile Image</th>
                               <th className='back2'>User Type</th>
                               <th className='back2'>Username</th>
                               <th className='back2'> Date Of Birth</th>
                              
                               <th className='back2'>Delete</th>
                               
                           </tr>
                           
                       </thead>
                       <tbody>
                           {
                               this.state.videos.map(
                                   video =>
                                   <tr key={video.id}>
                                     <td className='back1'>{video.id}</td>
                                       <td className='back1'>{video.email}</td>
                                       <td className='back1'><img src={video.imageOfProfile} className='viewAllImage'/></td>
                                       <td className='back1'>{video.userType}</td>
                                       <td className='back1'>{video.username}</td>
                                       <td className='back1'>{video.dateOfBirth}</td>
                                   
                  
                                       <td className='back1'>
                                       <button className="buttonVR"
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
