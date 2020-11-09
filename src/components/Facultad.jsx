import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { PerfilContext } from '../context/PerfilContext'
import { carreraUsuario } from '../helpers'
import { CarreraCard } from './CarreraCard'
// import { Spinner } from './Spinner'

export const Facultad = ({carreras, nombrecarrera}) => {
    
  const perfil = useContext(PerfilContext);
  const { carrera, escuela, facultad } = perfil.perfil;
  const [carerasarray, guardarCarreras] = useState([]);

    // const carrerasByFacultad  = carreras.filter(carreraFilter=> carreraFilter.facultad === facultad)
    
    useEffect(() => {
      try {
        const carrerasByFacultades = (nombre) => {
          console.log(nombrecarrera);
          const carrerasFacultad = carreras.filter(
            (carreraFilter) => carreraFilter.facultad === nombre
          );
          guardarCarreras(carrerasFacultad);
        };
        carrerasByFacultades(nombrecarrera);
      } catch (error) {
        console.error(error);
      }
    }, [nombrecarrera, carreras]);



    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <h4 className="lead m-4">
              Carreas de la facultad de {nombrecarrera}
            </h4>
          </div>
          <div className="col">
            {" "}
            <div className="row">
              {carerasarray && carrera
                ? carerasarray
                    .filter(
                      (carrerafilter) =>
                        carrerafilter.nombre === carreraUsuario(carrera) || (carrerafilter.nombre !== 'ninguna' && carrerafilter.facultad!=='Todas')
                    )
                    .map((carrera) => (
                      <CarreraCard carrera={carrera} key={carrera.id} />
                    ))
                : carerasarray.map((carrera) => (
                    <CarreraCard carrera={carrera} key={carrera.id} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    );
}
