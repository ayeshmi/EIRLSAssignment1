import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";


function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
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
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;