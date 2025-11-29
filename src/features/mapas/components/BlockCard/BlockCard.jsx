import React from "react";
import "./BlockCard.css";

function BlockCard() {
  const cards = [
    {
      title: "Casa en Venta - $250,000",
      description: "Av.Javier Prado Este 560, San Isidro 15046",
      image: "/img/imagen1.jpg",
    },
    {
      title: "Apartamento en Alquiler - $1,200/mes",
      description: "Av. Las Begonias 415, san Isidro 15046",
      image: "/img/imagen2.jpg",
    },
    {
      title: "Terreno en Venta - $100,000",
      description: "Av. Los Eucaliptos 789, Miraflores 15074",
      image: "/img/imagen3.jpg",
    },
    {
      title: "Local Comercial - $3,000/mes",
      description: "Av. Los Olivos 123, San Borja 15036",
      image: "/img/imagen4.jpg",
    },
    {
      title: "Oficina en Venta - $200,500",
      description: "Av. Los Alamos 456, San Isidro 15046",
      image: "/img/imagen5.jpg",
    },
    {
      title: "Deeposito en Alquiler - $1,500/mes",
      description: "Calle Los Pinos 789, Callao 07021",
      image: "/img/imagen6.jpg",
    },
  ];

  return (
    <div className="cardsBlock">
      {cards.map((card, index) => (
        <div key={index} className="cardItem">
          <img src={card.image} alt={card.title} className="cardImage" />

          <div className="cardContent">
            <h3 className="cardTitle">{card.title}</h3>
            <p className="cardDescription">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlockCard;
