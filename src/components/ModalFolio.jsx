import React, { useContext, useState } from "react";
import { AlumnosContext } from "../context/AlumnosContext";
import { FolioContext } from "../context/FolioContext";
import { ContenidoFolio } from "./ContenidoFolio";
import { InputFolio } from "./InputFolio";
import perfilStudent from "../perfilStudent.png";

export const ModalFolio = () => {
  const { folios, indice } = useContext(FolioContext);
  const { id, nombres, apellidos, rut, carrera } = indice;
  const { idUsuario } = useContext(AlumnosContext);

  console.log(carrera);
  const traerFoliosEspecificos =
    idUsuario === 1 ? (
      folios ? (
        Object.values(folios)
          .filter((foliofilter) => foliofilter.alumno.id === id)
          .map((folioalumno) => (
            <ContenidoFolio key="{folioalumno.id}" folioalumno={folioalumno} />
          ))
      ) : (
        <p>No hay folios</p>
      )
    ) : folios ? (
      Object.values(folios)
        .filter(
          (foliofilter) =>
            foliofilter.alumno.id === id && foliofilter.user === idUsuario
        )
        .map((folioalumno) => (
          <ContenidoFolio key="{folioalumno.id}" folioalumno={folioalumno} />
        ))
    ) : (
      <p>No hay folios</p>
    );
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="exampleModalLong"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content fondo">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {nombres} {apellidos}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="col">
              <div className="title p-3 mb-2 bg-success text-white presentacionAlumno">
                <img
                  src={perfilStudent}
                  className="rounded-circle pr-3"
                  alt="hola"
                  height="80"
                />
                <div className="datos">
                  {carrera ? <p>{carrera.nombre}</p> : null}
                  <p>Rut: {rut}</p>
                </div>
              </div>
              <InputFolio />
              {traerFoliosEspecificos}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" className="btn btn-primary">
              Save changes
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
