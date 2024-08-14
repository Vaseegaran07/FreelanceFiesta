import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

function GigCard({ item }) {
  return (
    <Link to={`/gig/${item.id}`} className="link">
      <div className="gigCard">
        {/* Check if coverImage exists before displaying it */}
        {item.coverImage && (
          <img
            src={`data:image/jpeg;base64,${item.coverImage}`}
            alt={item.title}
            className="gigCardImage"
          />
        )}
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="Profile" />
            <span>{item.username}</span>
          </div>
          <p>{item.shortDescription}</p>
          <div className="star">
            <img src="./img/star.png" alt="Star Rating" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="Heart Icon" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GigCard;
