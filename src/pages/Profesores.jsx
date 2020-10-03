import React, { useContext } from 'react'
import { RellenoPaginas } from '../components/RellenoPaginas'
import { UserContext } from '../context/UserContext'

export const Profesores = () => {

    const { usuarios } = useContext(UserContext);
    console.log(usuarios);
    return (
      <div className="row m-4">
        <div className="col">
        <h3>Usuarios registrados</h3>
        <ul>
          {usuarios.data ? (
            usuarios.data.map((user) => (
              <li key={user.id}>{user.username}
              </li>
            ))
          ) : (
            <li>No existe usuarios</li>
          )}
        </ul>
        </div>
      </div>
    );
}
