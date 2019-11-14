import React from "react";

export default function SingleCard({imgId}) {
  const cardImage = "https://picsum.photos/300/400?random=" + imgId;

  return (
    <div className="slider_card">
      <img className="slider_card_image" src={cardImage} alt="img-slider"/>
    </div>
  );
}