import React from 'react'
import "./styles.css";
import perfil from "../perfil.png"

export const ContenidoFolio = ({folioalumno}) => {
    
    return (
      <div key={folioalumno.id} className="tarjeta shadow mb-3">
        <div className="picture">
          <img
            className="imagen"
            src={perfil}
            alt={`foto de ${folioalumno.alumno}`}
          />
        </div>
        <div className="content">
          <div className="titulo">
            <div className="usuario">
              <h6 className="card-title activator grey-text text-darken-4">
                {folioalumno.usuario}
              </h6>
            </div>

            <div className="tarjeta-fecha">
              <p>{folioalumno.created}</p>
            </div>
          </div>

          <div className="contenido">
            <p>{folioalumno.content}</p>
          </div>
        </div>
      </div>
    );
}
