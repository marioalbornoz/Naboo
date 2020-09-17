import React, { useContext } from 'react'
import { FolioContext } from '../context/FolioContext';
import { ContenidoFolio } from './ContenidoFolio';
import { InputFolio } from './InputFolio';

export const ModalFolio = () => {

    const { folios, indice } = useContext(FolioContext);
    const { id, nombres, apellidos, rut, nombrecarrera, is_active } = indice;
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
        <div className="modal-content">
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
              <div className="title p-3 mb-2 bg-success text-white">
                  <p>Rut: {rut}</p>
                  <p>Carrera: {nombrecarrera}</p>
              </div>
              <InputFolio />
              {folios
                .filter((folio) => folio.student === id)
                .map((folioalumno) => (
                  <ContenidoFolio
                    key="{folio.student}"
                    folioalumno={folioalumno}
                  />
                ))}
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
