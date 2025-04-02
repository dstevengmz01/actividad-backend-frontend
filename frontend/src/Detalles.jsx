import React from "react";
import { useLocation } from "react-router-dom";

function Detalles() {
  const location = useLocation();
  const detalles = location.state?.detalles; // Obtenemos el estado pasado desde `Usuarios`

  // Si no se pasa el estado, mostramos el mensaje de error
  if (!detalles) {
    return <p>No se ha seleccionado un usuario.</p>;
  }

  return (
    <div>
      <h1>Detalles del Usuario</h1>
      <p>ID: {detalles.id}</p>
      <p>Nombre: {detalles.nombre}</p>
      <p>Otros detalles:</p>
    </div>
  );
}

export default Detalles;
