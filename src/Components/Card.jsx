import React from "react";
import { Link } from "react-router-dom";
const Card = ({ name, username, id }) => {
 

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const currentFavs = JSON.parse(localStorage.getItem("favs")) || [];
   
    const isAlreadyFav = currentFavs.some((fav) => fav.id === id);
    if (!isAlreadyFav) {
      const newFav = { id, name, username };
      const updatedFavs = [...currentFavs, newFav];

      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      alert("Añadido a favoritos");
    } else {
      alert("Esta tarjeta ya está en favoritos");
    }
  };
     
  

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <h2>{name}</h2>
        <p>Username: {username}</p>
        <p>ID: {id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentista/${id}`}>Ver detalles</Link>  
      

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
  }

export default Card;
