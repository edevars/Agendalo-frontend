import React from "react";
import "../Styles/card.css";
import { Link } from "react-router-dom";

const Cards = ({ place }) => {
  return (
    <div className="card">
      <img src={place.cover} alt="" />
      <div className="margin">
        <h4>{place.name}</h4>
        <p>{place.countryName}</p>
        <p>{place.description}</p>
        <Link to={`/reservar/${place._id}`}>
          <button className="Cardbutton">Reservar ya</button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
