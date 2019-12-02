import React from "react";
import Card from "./Card";
import "../Styles/card.css";

const CardsGrid = ({ places }) => {
  return (
    <div className="cardsGrid">
      {places.map(place => (
        <Card place={place}></Card>
      ))}
    </div>
  );
};

export default CardsGrid;
