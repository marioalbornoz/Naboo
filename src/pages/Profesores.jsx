import React, {  useContext } from 'react'
import { UserContext } from '../context/UserContext';
import imagen from "../perfil-clase.png";
import { Spinner } from '../components/Spinner';

export const Profesores = () => {

    const { usuarios } = useContext(UserContext);

    const rolUsuario = (rol) => {
        switch (rol) {
          case 1:
            return "Administrador";
          case 2:
            return "Decano";
          case 3:
            return "Director escuela";
          case 4:
            return "Jefe Carrera";
          case 5:
            return "Sesaes";
          case 6:
            return "Deporte";
          case 7:
            return "Academico";
          case 8:
            return "Otro";
          case 9:
            return "Bienestar";
          case undefined:
            return "No definido";
          default:
            return "No definido";
        }
  
    }
    
    return (
      <div className="col-lg-9 col-md-9 col-sm-12 ">
        <div className="title m-5">
          <h4 className="lead">Usuarios Registrados</h4>
        </div>
        <div className="row">
          {usuarios.data ? (
            usuarios.data.map((user) => (
              <div
                className={`card text-white usuarios shadow col-lg-3 col-md-5 col-sm-12`}
                key={user.id}
              >
                <div className="card-header">
                  {user ? rolUsuario(user.rol) : console.log(user)}
                </div>
                <div className="card-body cuerpo">
                  <img src={imagen} alt="hola" className="img-card" />
                  <h6 className="card-title pl-2">{user.username}</h6>
                </div>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    );
}
