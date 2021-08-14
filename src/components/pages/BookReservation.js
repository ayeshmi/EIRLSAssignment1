import React,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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

export default class BookReservation extends Component {
  
constructor(props){
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
    this.state={
        open:false
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

    render(){
      
      
        return (
          <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              Open dialog
            </Button>
            <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
              <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                Harry Potter
              </DialogTitle>
              <DialogContent dividers>
              <Typography gutterBottom>
                  Author : Ayeshmi Samaradivakara
                </Typography>
                <Typography gutterBottom>
                  About Book:
                </Typography>
                <Typography gutterBottom>
              Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. 
              Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. 
              Then, on Harry’s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard,
              and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!
                </Typography>
               
                
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={this.handleClose} color="primary">
                  Book
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
    }
  
}

