import React, { useContext } from 'react'
import { PerfilContext } from '../context/PerfilContext';
import img from '../perfil-clase.png';
export const Perfil = () => {
  const { perfil } = useContext(PerfilContext);
    const {username, email, groups} = perfil;
    const idPerfil = (
      groups ? groups.map(perfil => (
        perfil.name)
       ) : null
    )
    return perfil ? (
      <div className="col-lg-9 col-md-8 mt-5 perfil">
        <div className="title m-3 ml-5 pb-4">
          <h4 className="font-weight-bold">Perfil Usuario</h4>
        </div>
        <div className="card shadow redondeado ml-5">
          <div className="perfil-imagen m-2">
            <img src={img} alt="" className="img-perfil" />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 pt-4 perfil-cuerpo m-3">
            <p className="lead">
              <span className="font-weight-bold">Usuario</span>: {username}
            </p>
            {perfil.first_name ? (
              <p className="lead">
                {" "}
                <span className="font-weight-bold">Nombres</span> {perfil.first_name} {perfil.last_name}
              </p>
            ) : null}
            <p className="lead">
              <span className="font-weight-bold">Rol de Usuario</span>:{" "}
              {idPerfil}
            </p>
            <p className="lead">
              <span className="font-weight-bold">Correo</span>: {email}
            </p>
          </div>
        </div>
      </div>
    ) : null;

}
