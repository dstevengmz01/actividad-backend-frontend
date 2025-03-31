import { useEffect, useState } from "react";
import axios from "axios";
import Reserva from "./reserva";

function Usuarios() {
  const [user, setUser] = useState([]);
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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {user.map((index) => {
            return (
              <tr key={index.id}>
                <td>{index.id}</td>
                <td>{index.nombre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>Reserva</h1>
      <Reserva></Reserva>
    </div>
  );
}

export default Usuarios;
