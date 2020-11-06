import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { FolioContext } from '../context/FolioContext'
import { colorTargetHistorial } from '../helpers';

export const Sesaes = () => {
    const folios = useContext(FolioContext);
    // const usuarios = useContext(UserContext);

    // const {data} = usuarios.usuarios

    // const usuariosSesaes = data ? data.filter(sesaes => sesaes.rol === 5) : null
    const foliosUserSesaes = folios ? folios.folios.filter(foliofilter => foliofilter.rol === "sesaes"):null

    return (
      <div className="col-lg-9 col-md-9 col-sm-12 m-4">
        <h4 className="lead m-4">Historial SESAES</h4>
        {foliosUserSesaes ? (
          foliosUserSesaes.map((folio, i) => (
            <div key={i} className={`card shadow m-3 pl-4 pt-3 ${colorTargetHistorial(folio)}`}>
              <p className="">
                {" "}
                <span className="fuenteCard">{folio.usuario}</span> :{" "}
                <span className="">{folio.content}</span>
                <small className="small">({folio.alumno.nombres} {folio.alumno.apellidos})</small>
              </p>
            </div>
          ))
        ) : (
         <p>Cargando</p> 
        )}
      </div>
    );
}
