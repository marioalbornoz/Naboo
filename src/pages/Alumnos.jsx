import React from 'react'
import { AlumnosLista } from '../components/AlumnosLista'
// import { RellenoPaginas } from '../components/RellenoPaginas'

export const Alumnos = () => {
  return (
    <div className="p-md-5 col-lg-10 col-md-9">
       <h2 className="mb-4 p-3">Folio Estudiantil #07</h2>
      <AlumnosLista />
    </div>
  );
};
