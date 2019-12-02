import React from "react";
import "../Styles/card.css";

const Cards = ({ place }) => {
  return (
    <div className="card">
      <img src={place.cover} alt="" />
      <div className="margin">
        <h4>{place.name}</h4>
        <p>{place.countryName}</p>
        <p>{place.description}</p>
        <button className="Cardbutton">Reservar ya</button>
      </div>
    </div>
  );
};

export default Cards;
