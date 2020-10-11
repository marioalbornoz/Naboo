import React from 'react'
import FotoCarreras from "../groups.png"

export const ContenrHome = () => {
    return (
      <div id="content" className="p-4 p-md-5 col-lg-10 col-md-9">
        <h6 className="mb-4 lead">Folio Estudiantil #07</h6>
        <div className="card shadow col-lg-5 col-md-6 col-sm-12 card-carrera redondeado" >
          <img className="card-img-top" src={FotoCarreras} alt="" />
          <div className="card-body codigocarrera">
            <h2 className="card-title">21030</h2>
            <p className="card-text">
              Escuela de ingenieria informatica
            </p>
            <a href="/alumnos" class="btn btn-primary">
              ir a alumnos
            </a>
          </div>
        </div>
      </div>
    );
}
