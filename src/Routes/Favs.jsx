import React from "react";
import Card from "../Components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  // Recuperar las tarjetas favoritas del Local Storage
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Mapear las tarjetas favoritas y renderizar una Card por cada una */}
        {favs.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;


