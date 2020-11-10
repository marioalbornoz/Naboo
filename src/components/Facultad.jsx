import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { CarreraContext } from '../context/CarreraContext';
import { carreraUsuario } from '../helpers'
import Escuelas from './Escuelas';
import { CarreraCard } from './CarreraCard'
// import { Spinner } from './Spinner'

export const Facultad = ({nombreFacultad, perfil}) => {
    
  const {carreras, escuelas, facultades} = useContext(CarreraContext)
  const { carrera,escuela, rol } = perfil;
  const nombreEscueladelUsuario = perfil.escuela;

  // variable que guarda todas las escuelas por facultad, si la escuela es ninguna manda todas las escuelas de lo contrario solo arroja la escuela del director
  const escuelaDeEstaFacultad =
    escuela === "Ninguna"
      ? escuelas.filter(
          (escuelafilter) => escuelafilter.facultad === nombreFacultad
        )
      : escuelas.filter(
          (escuelafilter) =>
            escuelafilter.nombre === nombreEscueladelUsuario && (rol === 3 || rol === 4)
        );
    
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <h4 className="lead m-4">
              Carreras de la facultad de {nombreFacultad}
            </h4>
          </div>
          <div className="col">
            {" "}
            <div className="row">
              <Escuelas
                escuela={escuelaDeEstaFacultad}
                carreraUsuario={carrera}
              />
            </div>
          </div>
        </div>
      </div>
    );
}
