import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Retrieve existing favorites from local storage
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Check if the current card ID is already in the favorites list
    if (!existingFavorites.includes(id)) {
      // If not, add it to the favorites list
      existingFavorites.push(id);

      // Save the updated favorites list to local storage
      localStorage.setItem("favorites", JSON.stringify(existingFavorites));
    }
  };

  return (
    <div className="card">
      <img src="../images/doctor.jpg" alt="doctor" />
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{username}</h3>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
