import React from 'react'
import { colorTargetHistorial } from '../helpers';

export const TarjetaContenidos = ({folio, oculto}) => {
    console.log("hola mundo");
    return (
      <div
        className={`card shadow m-3 pl-4 pt-3 animate__animated animate__backInLeft ${colorTargetHistorial(
          folio
        )}`}
      >
        <p className="">
          {" "}
          <span className="fuenteCard">{folio.usuario}</span> :{" "}
          {
            !oculto ? <span className="">{folio.content}</span> : <span>"Contenido sensible, ha sido ocultado."</span>
          }
          <small className="small">
            ({folio.alumno.nombres} {folio.alumno.apellidos})
          </small>
        </p>
      </div>
    );
}
