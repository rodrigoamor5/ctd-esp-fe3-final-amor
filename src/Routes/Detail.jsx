import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Fetch user details from JSONPlaceholder API
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("404");
        }
        return response.json();
      })
      .then((data) => {
        // Update the 'dentist' state with the fetched data
        setDentist(data);
      })
      .catch((error) => {
        console.error("401", error);
      });
  }, [id]);

  if (!dentist) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="detail">
      <h2>{dentist.name}</h2>
      <p>Email: {dentist.email}</p>
      <p>Telefono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </div>
  );
};

export default Detail;
