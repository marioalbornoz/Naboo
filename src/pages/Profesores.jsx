import React, { Fragment, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import "./style.css";
import imagen from "../perfil-clase.png";

export const Profesores = () => {

    const { usuarios } = useContext(UserContext);
    
    return (
      <Fragment>
        <div className="row ml-4 mt-4 fila">
          <div className="ml-4 col-lg-10 col-md-6 col-sm-12">
            <h3 className="font-weight-bold">Usuarios registrados</h3>
          </div>
          {usuarios.data ? (
            usuarios.data.map((user) => (
              <div className="col-lg-3 col-md-6 col-sm-10" key={user.id}>
                <div className="card text-white usuarios shadow">
                  <div className="card-header">{ (user)? (user.groups).map(grupo => (
                    grupo.name
                  )) : console.log(user)}</div>
                  <div className="card-body cuerpo">
                    <img src={imagen} alt="hola" className="img-card" />
                    <h6 className="card-title pl-2">{user.username}</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No existe usuarios</p>
          )}
        </div>
      </Fragment>
    );
}
