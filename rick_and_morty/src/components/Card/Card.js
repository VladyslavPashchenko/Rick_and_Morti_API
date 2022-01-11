import "./Card.scss";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status } = x;

      return (
        <Link
          to={`${page}${id}`}
          key={id} className="card">
          <div className="card__character">
            <img className="img-fluid" src={image} alt="" />
            <div className= "card__info">
            <div className="card__text">
              <div className="card__name name__styles">{name}</div>
            </div>

            {(() => {
              if (status === "Dead") {
                return (
                  <div className="danger bg-styles">
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="success bg-styles">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className="secondary bg-styles">
                    {status}
                  </div>
                );
              }
            })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
