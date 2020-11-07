import React from 'react';
import FotoCarreras from "../groups.png"
import { obtenerCarreraCodigo } from '../helpers';

export const CarreraCard = ({carrera}) => {
    return (
      <div
        className="card shadow col-lg-5 col-md-6 col-sm-12 card-carrera redondeado m-2"
      >
        <img className="card-img-top" src={FotoCarreras} alt="" />
        <div className="card-body codigocarrera">
          <h2 className="card-title">{carrera.codigo}</h2>
          <p className="card-text">Escuela {carrera.nombre}</p>
          <a
            href={`/alumnos`}
            onClick={() => {
              obtenerCarreraCodigo(carrera.codigo);
            }}
            className="btn btn-primary"
          >
            ir a alumnos
          </a>
        </div>
      </div>
    );
}
