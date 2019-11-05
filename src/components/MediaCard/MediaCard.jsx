import React from "react";
import "./MediaCard.scss";

const MediaCard = () => {
  return (
    <div className="info-card">
      <h2>Get Connected</h2>
      <div className="media">
        <i class="fab fa-youtube fa-2x youtube"></i>
        <p>Youtube</p>
      </div>
      <div className="media">
        <i class="fab fa-facebook-f fa-2x facebook"></i>
        <p>Facebook</p>
      </div>
      <div className="media">
        <i class="fab fa-instagram fa-2x instagram"></i>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default MediaCard;
