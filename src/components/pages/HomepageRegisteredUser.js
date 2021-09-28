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
        
        this.state={
            open:false,
            employees: [],
            ComicBooks:[],
            RomanceBooks:[],
            ActionBooks:[],
            DramaBooks:[],
            FantasyBooks:[],
            HorrorBooks:[]
        };
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

        authService.getBooks().then((res) => {
              this.setState({employees:res.data});
        });
        authService.RhomePageBooksAction().then((res) => {
          this.setState({ActionBooks:res.data});
    });
    authService.RhomePageBooksComic().then((res) => {
      this.setState({ComicBooks:res.data});
});
authService.RhomePageBooksDrama().then((res) => {
  this.setState({DramaBooks:res.data});
});
authService.RhomePageBooksFantasy().then((res) => {
  this.setState({FantasyBooks:res.data});
});
authService.RhomePageBooksRomance().then((res) => {
  this.setState({RomanceBooks:res.data});
});
authService.RhomePageBooksHorror().then((res) => {
  this.setState({HorrorBooks:res.data});
});

    }

  

    editEmployee(id){
      this.props.history.push(`viewSelectedBook/${id}`);

  }

    
    render() {          
            return (
                
                <div className="cards1">
                  <h1>Book Collection</h1>
                   
                    
          
      
      <div className="cards__container1">
        <div className="cards__wrapper1">
          <h2>Comic</h2>
          <ul className="cards__items1">
          
          {
            
                    this.state.ComicBooks.map(
                employee =>
          <div class="child "  >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
            <h2>Action</h2>
            <ul className="cards__items1">
          {
                    this.state.ActionBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
            
            <ul className="cards__items1">
            <h2>Drama</h2>
          {
            
                    this.state.DramaBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
            <h2>Romance</h2>
            <ul className="cards__items1">
          {
                    this.state.RomanceBooks.map(
                employee =>
          <div class="child ">
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul> 
            <h2>Fantasy</h2>
            <ul className="cards__items1">
          {
                    this.state.FantasyBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>    
            <h2>Horror</h2>    
            <ul className="cards__items1">
          {
                    this.state.HorrorBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
        </div>
      
      </div>

        <h1>Video Collection</h1>
                   
                    
          
      
      <div className="cards__container1">
        <div className="cards__wrapper1">
          <h2>Comic</h2>
          <ul className="cards__items1">
          
          {
            
                    this.state.ComicBooks.map(
                employee =>
          <div class="child "  >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            /> 
       
            </div> 
              )
            }  
            </ul>
            <h2>Action</h2>
            <ul className="cards__items1">
          {
                    this.state.ActionBooks.map(
                employee =>
          <div class="child ">
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
            
            <ul className="cards__items1">
            <h2>Drama</h2>
          {
            
                    this.state.DramaBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>
            <h2>Romance</h2>
            <ul className="cards__items1">
          {
                    this.state.RomanceBooks.map(
                employee =>
          <div class="child " >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul> 
            <h2>Fantasy</h2>
            <ul className="cards__items1">
          {
                    this.state.FantasyBooks.map(
                employee =>
          <div class="child "  >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
              path={'/viewSelectedBook/'+employee.id}
            />   
            </div> 
              )
            }  
            </ul>    
            <h2>Horror</h2>    
            <ul className="cards__items1">
          {
                    this.state.HorrorBooks.map(
                employee =>
          <div class="child "  >
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Book"
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

  
  