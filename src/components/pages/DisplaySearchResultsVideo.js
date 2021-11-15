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

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

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
            employees: [],
            ComicBooks:[],
            RomanceBooks:[],
            ActionBooks:[],
            DramaBooks:[],
            FantasyBooks:[],
            HorrorBooks:[],
            searchResult:""
            
         
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
        authService. searchBook(
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


      componentDidMount(){

      
        authService.searchVideo(this.state.h1).then((res) => {
          this.setState({HorrorBooks:res.data});
        });
        
            }

    editEmployee(id){
      this.props.history.push(`searchVideoResult/${id}`);
  }

    
    render() {          
            return (
                
                <div className="cards1">
           
                  <h1>Video Collection</h1>      
      <h2>Searched Result for "{this.state.h1}"</h2>
      <div className="cards__container1">
        <div className="cards__wrapper1">
            
            <ul className="cards__items1">
          {
                    this.state.HorrorBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Video"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
        </div>
      
      </div>

     
                                
    
    </div>
   
              )                  
    }
}
