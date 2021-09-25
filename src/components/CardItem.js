
import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <onclick to={props.action}/>
            <onclick>{props.action}</onclick>
            <img src={props.src} alt="Travel" className="cards__item__img" />
            <button onClick={props.click}>Hello</button>
          </figure>
          <div className="cards__item__info">
            <p className="cards__item__text">{props.text}</p>
            <p className="cards__item__text1">{props.text1}</p>
            <p className="cards__item__text2">{props.text2}</p>
            <p className="cards__item__text3">{props.text3}</p>
            <p className="cards__item__text4">{props.text4}</p>
            <p className="cards__item__text5">{props.text5}</p>
            <p className="cards__item__text6">{props.text6}</p>
            <p className="cards__item__tex7">{props.text7}</p>
            <p className="cards__item__text8">{props.text8}</p>
            <p className="cards__item__text9">{props.text9}</p>
            <p className="cards__item__text10">{props.text10}</p>
            <p className="cards__item__text11">{props.text11}</p>
            <p className="cards__item__text12">{props.text12}</p>
            <p className="cards__item__text13">{props.text13}</p>
            <p className="cards__item__text14">{props.text14}</p>
            <p className="cards__item__text15">{props.text15}</p>

          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;