import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import FotoCarreras from "../groups.png"
// import { Spinner } from './Spinner'

export const Facultad = ({carreras, nombrecarrera}) => {
    
    const [carerasarray, guardarCarreras] = useState([])

    // const carrerasByFacultad  = carreras.filter(carreraFilter=> carreraFilter.facultad === facultad)
    
    useEffect(()=>{
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
    }, [nombrecarrera, carreras])


    const obtenerCarreraCodigo = (id) => {
      if(id){
        localStorage.setItem('carrera',id)
      }
      return;
    }
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
              {carerasarray ? (
                carerasarray.map((carrera) => (
                  <div
                    key={carrera.id}
                    className="card shadow col-lg-5 col-md-6 col-sm-12 card-carrera redondeado m-2"
                  >
                    <img className="card-img-top" src={FotoCarreras} alt="" />
                    <div className="card-body codigocarrera">
                      <h2 className="card-title">{carrera.codigo}</h2>
                      <p className="card-text">Escuela {carrera.nombre}</p>
                      <a
                        href={`/alumnos`}
                        onClick={
                          () => {
                            obtenerCarreraCodigo(carrera.codigo)
                          }
                        }
                        className="btn btn-primary"
                      >
                        ir a alumnos
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay carreas ingresadas aun</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
