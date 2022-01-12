import "./Card.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species, created } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);



  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__container">
          <h1 className="profile__text-center">{name}</h1>
          <img className="profile__img" src={image} alt="" />
          {(() => {
            if (status === "Dead") {
              return <div className="danger bg-styles">{status}</div>;
            } else if (status === "Alive") {
              return <div className="success bg-styles">{status}</div>;
            } else {
              return <div className="secondary bg-styles">{status}</div>;
            }
          })()}
          <div className="content">
            <div className="card__status">
              <span className="card__gender">Gender : </span>
              {gender}
            </div>
            <div className="">
              <span className="card__location">Location: </span>
              {location?.name}
            </div>
            <div className="">
              <span className="card__origin">Origin: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="card__species">Species: </span>
              {species}
            </div>
            <div className="">
              <span className="card__created">Created: </span>
              {created}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;