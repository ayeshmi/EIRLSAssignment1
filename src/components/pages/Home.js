import React, { Component } from 'react';
import authService from "../services/auth.service";

import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import CardItem from "../CardItem";
export default class AddNewBook extends Component {


  render(){
    return (
      <>
        <HeroSection />
        <Cards/>
        <Footer />
      </>
    );
  }

}

