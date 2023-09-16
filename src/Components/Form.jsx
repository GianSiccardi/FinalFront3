import React from "react";
import { useState } from 'react';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza las validaciones aquí
    const erroresValidacion = {};
 
if (nombre.length <= 5) {
  erroresValidacion.nombre = 'El nombre debe tener más de 5 caracteres.';
}

if (!email.trim()) {
  erroresValidacion.email = 'El correo electrónico no puede estar vacío.';
}

if (Object.keys(erroresValidacion).length > 0) {
  setErrores(erroresValidacion);
} else {
 console.log(`GRACIAS ${nombre} ,nos comunicaremos con vos via email`)
  setNombre('');
  setEmail('');
}
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label placeholder="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>
      <div>
        <label placeholder="email">Email:</label>
        <input type="email" id="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errores.email && <p className="error">{errores.email}</p>}
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )};


export default Form;
