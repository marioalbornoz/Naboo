import React, { useContext } from 'react';
import { FolioContext } from '../context/FolioContext'
import { PerfilContext } from '../context/PerfilContext';
import { colorTargetHistorial } from '../helpers';

export const Sesaes = () => {
    const folios = useContext(FolioContext);
    const perfil = useContext(PerfilContext);

    const {rol} = perfil.perfil
    // console.log(perfil.perfil.rol);

    // const usuariosSesaes = data ? data.filter(sesaes => sesaes.rol === 5) : null
    const foliosUserSesaes = folios ? folios.folios.filter(foliofilter => foliofilter.rol === "sesaes"):null

    return (
      <div className="col-lg-9 col-md-9 col-sm-12 m-4">
        <h4 className="lead m-4 animate__animated ">Historial SESAES</h4>
        {rol === 5
          ? foliosUserSesaes.map((folio, i) => (
              <div
                key={i}
                className={`card shadow m-3 pl-4 pt-3 animate__animated animate__backInLeft ${colorTargetHistorial(
                  folio
                )}`}
              >
                <p className="">
                  {" "}
                  <span className="fuenteCard">{folio.usuario}</span> :{" "}
                  <span className="">{folio.content}</span>
                  <small className="small">
                    ({folio.alumno.nombres} {folio.alumno.apellidos})
                  </small>
                </p>
              </div>
            ))
          : foliosUserSesaes.map((folio, i) => (
              <div
                key={i}
                className={`card shadow m-3 pl-4 pt-3 ${colorTargetHistorial(
                  folio
                )}`}
              >
                <p className="">
                  {" "}
                  <span className="fuenteCard">{folio.usuario}</span> { !folio.priority_one ? folio.content : <>Este contenido esta oculto{" "}</>} 
                  <small className="small">
                    ({folio.alumno.nombres} {folio.alumno.apellidos})
                  </small>
                </p>
              </div>
            ))}
      </div>
    );
}
