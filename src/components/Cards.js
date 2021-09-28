
import CardItem from "./CardItem";
import "./Cards.css";
import React, { Component } from 'react';
import authService from './services/auth.service';


export default class AddNewBook extends Component {

  constructor(props){
    super(props);
    //this.handleClickOpen = this.handleClickOpen.bind(this);
    //this.handleClose = this.handleClose.bind(this);
    
    this.state={
        //open:false,
        employees: [],
        books:[]
    };
}

  componentDidMount(){
    authService.homePageVideos().then((res) => {
          this.setState({employees:res.data});
    });
    authService.homePageBooks().then((res) => {
      this.setState({books:res.data});
});
}

editEmployee(id){
  this.props.history.push(`viewSelectedBook/${id}`);

}

  render(){
    return (
      <div className="cards">
        <h1>What We Do?</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src='images/image2.jpg'
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Book"
                path="/services"
              />
              <CardItem
                src='images/image1.jpg'
                text='hdhsdd \n dfdfdf \n'
                label="Video"
                path="/services"
              />
            </ul>
            <h1>Search Our Most Popular Videos</h1>
            <br></br>
            <ul className="cards__items1">
          {
                    this.state.employees.map(
                employee =>
          <div class="child "  onClick={ () => this.editEmployee(employee.id)}>
            <CardItem
              src={employee.imageOfVideo}
              text={employee.title}
              label="Video"
            />   
            </div> 
              )
            }  
            </ul>
            <h1>Search Our Most Popular Books</h1>
            <br></br>
            <ul className="cards__items1">
          {
                    this.state.books.map(
                book =>
          <div class="child "  onClick={ () => this.editEmployee(book.id)}>
            <CardItem
              src={book.imageOfVideo}
              text={book.title}
              label="Book"
            />   
            </div> 
              )
            }  
             
            
            </ul>
          </div>
        </div>
      </div>
      
    );
  }

}

