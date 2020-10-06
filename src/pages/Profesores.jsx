import React, { Fragment, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import "./style.css";
import imagen from "../avatarHombre.png"

export const Profesores = () => {

    const { usuarios } = useContext(UserContext);
    console.log(usuarios.data);
    return (
      <Fragment>
        <div className="row ml-4 mt-4 fila">
          <div className="ml-4 col-lg-10 col-md-9">
            <h3 className="font-weight-bold">Usuarios registrados</h3>
          </div>
          {usuarios.data ? (
            usuarios.data.map((user) => (
              <div
                className="card text-white m-2 usuarios shadow"
                key={user.id}
              >
                <div className="card-header">Header</div>
                <div className="card-body cuerpo">
                  <img src={imagen} alt="hola"/>
                  <h6 className="card-title pl-2">{user.username}</h6>
                </div>
              </div>
              // <div className="card gradient-card m-2" key={user.id}>
              //   <div class=" d-flex">
              //     <div class="first-content align-self-center p-3">
              //       <h6 class="card-title">{user.username}</h6>
              //     </div>
              //   </div>
              // </div>
            ))
          ) : (
            <p>No existe usuarios</p>
          )}
        </div>
      </Fragment>
    );
}
