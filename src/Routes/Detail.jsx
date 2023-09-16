
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import React, { useEffect } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [dentistDetails, setDentistDetails] = useState(null);
  useEffect(() => {
    // Supongamos que tienes una URL de API donde puedes obtener detalles de un dentista por su ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Almacena los detalles del dentista en el estado
        setDentistDetails(data);
      })
      .catch((error) => {
        console.error('Error al cargar los detalles del dentista:', error);
      });
  }, [id]);
  return (
    <>
    <h1>Detalles del dentista ID: {id}</h1>
    {dentistDetails ? (
      <div>
        <p>Nombre: {dentistDetails.name}</p>
        <p>Email: {dentistDetails.email}</p>
        <p>Teléfono: {dentistDetails.phone}</p>
        <p>Sitio web: {dentistDetails.website}</p>
      </div>
    ) : (
      <p>Cargando detalles del dentista...</p>
    )}
    <Link to="/">Volver a la página de inicio</Link>
  </>
);
}

export default Detail;





