import React from "react";
import Card from "./Card";
import "../Styles/card.css";

const CardsGrid = ({ places }) => {
  return (
    <div className="cardsGrid">
      {places.map(place => (
        <Card key={place._id} place={place}></Card>
      ))}
    </div>
  );
};

export default CardsGrid;
