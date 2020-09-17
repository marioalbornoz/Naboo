import React from 'react'
import "./styles.css";

export const ContenidoFolio = ({folioalumno}) => {
    
    return (
      <div className="tarjeta shadow mb-3">
      <div className="picture">
        <img
          className="imagen"
          src="https://folioestudiantil.herokuapp.com/static/base/img/perfil.png"
          alt={`foto de ${folioalumno.students}`}
        />
      </div>
      <div className="content">
        <div className="titulo">
          
          <div className="usuario">
            <h6 className="card-title activator grey-text text-darken-4">
              {folioalumno.user}
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
