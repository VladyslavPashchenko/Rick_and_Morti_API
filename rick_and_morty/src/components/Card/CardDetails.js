import "./Card.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TEST from "../Navbar/Navbar";

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
      <TEST />
      <div className="profile">
        <div className="profile__container">
          <h1 className="text-center">{name}</h1>
          <img className="img-fluid" src={image} alt="" />
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
              <span className="fw-bold">Gender : </span>
              {gender}
            </div>
            <div className="">
              <span className="fw-bold">Location: </span>
              {location?.name}
            </div>
            <div className="">
              <span className="fw-bold">Origin: </span>
              {origin?.name}
            </div>
            <div className="">
              <span className="fw-bold">Species: </span>
              {species}
            </div>
            <div className="">
              <span className="fw-bold">Created: </span>
              {created}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;