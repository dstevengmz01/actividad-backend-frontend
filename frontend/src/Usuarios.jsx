import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Reserva from "./reserva";

function Usuarios() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const listUser = async () => {
    try {
      const respuesta = await axios.get(
        "http://localhost:6502/apiusuario/usuario"
      );
      console.log(respuesta);
      setUser(respuesta.data);
    } catch (e) {
      console.log("ERROR AL OBTENER LOS DATOS", e);
    }
  };

  useEffect(() => {
    listUser();
  }, []);

  const selectUser = (index) => {
    console.log("Usuario seleccionado:", index);
    // Usamos navigate para pasar el usuario seleccionado a la ruta de detalles
    navigate("/Detalles", { state: { detalles: index } });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {user.map((index) => {
            return (
              <tr key={index.id}>
                <td>{index.id}</td>
                <td>{index.nombre}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                  <button onClick={() => selectUser(index)}>
                    Ver detalles
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>Reserva</h1>
      <Reserva />
    </div>
  );
}

export default Usuarios;
