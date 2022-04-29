import React, { Component } from 'react';
import authService from '../services/auth.service';
import './ViewAllCategory.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardItem from "../CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
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

class ListBooks extends Component {

    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state={
            books: []
        }   
    }

    
    onChangeSearch(e) {
        this.setState({
          search: e.target.value
        });
      }

componentDidMount(){
    authService.getBooks().then((res) => {
          this.setState({books:res.data});
    });
}

DeleteBook(id){
    authService.deleteBookById(id).then(
    
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          authService.getBooks().then((res) => {
            this.setState({books:res.data});
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

notify (){
 
    // Calling toast method by passing string
    toast(this.state.message)
}

handleSearch(e){
    
    const h1=this.state.search;
    this.props.history.push(`/searchBookResultVB/${h1}`);
      window.location.reload();

}
getSelectedCategory(name){
    
  const h1=this.state.search;
  this.props.history.push(`/viewSelectedCategoryBooks/${name}`);
    window.location.reload();

}

    render() {
        return (
            <div className='bodyOfCategoryBook'>
               <h2 id="headerTitle1"><b>Book Category List</b></h2> 
               <br></br><br></br>
               <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" className='cardImage' src="https://www.gamerspack.com/wp-content/uploads/2017/12/AATitles.jpg" />
      <Card.Body>
      <p>Action-adventure is a video game genre that combines core elements from both the action game and adventure game genres. </p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Action and Adventure')}>Action and Adventure</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" className='cardImage' src="https://media.senscritique.com/media/000004795074/source_big/Anthology_2_Compilation.jpg" />
      <Card.Body>
        <p>In book publishing, an anthology is a collection of literary works chosen by the compiler; it may be a collection of plays. </p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Anthology')}>Anthology</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" className='cardImage' src="https://heavenlybells.org/img/top-10-english-classic-novels-3.jpg" />
      <Card.Body>
        <p>classic: [adjective] serving as a standard of excellence : of recognized value. traditional, enduring. </p>
        
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Classic')}>Classic</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" className='cardImage' src="https://s2982.pcdn.co/wp-content/uploads/2017/07/books-comics-shannonwright_custom-c0148d2f14493f94e832a404c9041066ba27cd35-s1500-c85.jpg" />
      <Card.Body>
        
        <p>A graphic novel is a book made up of comics content. Although the word "novel" normally refers to long fictional works.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Comic and Graphic Novel')}>Comic and Graphic Novels</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
<br></br>
        <ul className='cards__items14 '>
                 <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" className='cardImage' src="https://assets.wallpapersin4k.org/uploads/2017/04/Love-Cartoon-Wallpaper-Free-Download-8.jpg" />
      <Card.Body>
        <p>
Romance or romantic love is a feeling of love for, or a strong attraction towards another person, and the courtship behaviors undertaken.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Romance')}>Romance</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" className='cardImage' src="https://cdn.thinglink.me/api/image/1031129178285539330/1024/10/scaletowidth/0/0/1/1/false/true?wait=true" />
      <Card.Body>
        <p>Crime fiction, detective story, murder mystery, mystery novel, and police novel are terms used to describe narratives that centre on criminal acts.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Crime and Detective')}>Crime and Detective</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://drama.catholic.edu/_media/2018-photos-drama/directing_mg_0392-102-1200.jpg" />
      <Card.Body>
        
        <p>Drama is the specific mode of fiction represented in performance: a play, opera, mime, ballet, etc., performed in a theatre, or on radio or television.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Drama')}>Drama</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://images.everyeye.it/img-notizie/fairy-tail-episodio-finale-dell-anime-commuove-fan-v3-402490.jpg" />
      <Card.Body>
        
        <p>A fairy tale, fairytale, wonder tale, magic tale, fairy story or Märchen is an instance of European folklore genre that takes the form of a short story. </p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Fairy Tale')}>Fairy Tale</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>   
<br></br>
<ul className='cards__items14 '>
                 <div>
                 <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://getwallpapers.com/wallpaper/full/0/f/c/395577.jpg" />
      <Card.Body>
        
        <p>
Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Fantasy')}>Fantasy</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://www.amreading.com/wp-content/uploads/historical-fiction-1rq1sz9-901x535.jpg" />
      <Card.Body>
        
        <p>Historical fiction is a literary genre in which the plot takes place in a setting located in the past. Although the term is commonly used as a synonym.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Historical Fiction')}>Historical Fiction</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://static3.gamerantimages.com/wordpress/wp-content/uploads/2018-best-horror-games.jpg" />
      <Card.Body>
        
        <p>
Horror is the one of the largest genres of speculative fiction which is intended to frighten, scare, or disgust. Literary historian J. A. Cuddon defined the horror story.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Horror')}>Horror</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/85/9f/8f/859f8fbec62f99107467482dff0c40c9.jpg" />
      <Card.Body>
        
        <p>Action-adventure is a video game genre that combines core elements from both the action game and adventure game genres. </p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Humor')}>Humor</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
    <br></br>
    <ul className='cards__items14 '>
                 <div>
                 <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="http://i.ytimg.com/vi/CMf23buTtRs/maxresdefault.jpg" />
      <Card.Body>
        <p>The meaning of LEGEND is a story from the past that is believed by many people but cannot be proved to be true. See more meanings of legend. </p>
        
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Legend')}>Legend</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)' }}>
      <Card.Img variant="top" src="https://resavycomputer.weebly.com/uploads/2/3/7/8/23786413/ghost-typing_orig.png" />
      <Card.Body>
        <p>A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident.</p>
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Short Story')}>Short Story</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
               <Card style={{ width: '17rem', backgroundColor:'rgb(119,181,254)',height:'22rem'  }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/ISYvGL5Y0rY/maxresdefault.jpg" />
      <Card.Body>
        <p>
Science fiction (sometimes shortened to sci-fi or SF) is a genre of speculative fiction which typically deals with imaginative and futuristic concepts. </p>
        
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Science Fiction')}>Science Fiction</Button>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{width: '17rem', backgroundColor:'rgb(119,181,254)',height:'22rem'  }}>
      <Card.Img variant="top" src="https://media.npr.org/assets/img/2014/10/03/mysteryman_wide-70fa36f922dbf9f4e2c5ffe102680111f8d04df0.jpg?s=1400" />
      <Card.Body>
        <p>The meaning of MYSTERY is something not understood or beyond understanding : enigma. How to use mystery in a sentence. Synonym Discussion of Mystery.</p>
        
        <Button variant="primary" onClick={()=>this.getSelectedCategory('Mystery')}>Mystery</Button>
      </Card.Body>
    </Card>
    </div>
    </ul>
            <br></br>
               
            </div>
        );
    }
}

export default ListBooks;