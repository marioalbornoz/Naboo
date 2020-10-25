import React from 'react'
import { useContext } from 'react'
import { Facultad } from '../components/Facultad'
import { Feedbacks } from '../components/Feedbacks'
import { CarreraContext } from '../context/CarreraContext'


export const ContenrHome = () => {

  const {carreras, facultades} = useContext(CarreraContext)

    return (
      <div id="content" className="p-4 p-md-5 col-lg-10 col-md-9">
        <h6 className="mb-4 lead">Folio Estudiantil #07</h6>
        {facultades
          ? facultades.map((facultad) => (
              <Facultad
                key={facultad.id}
                carreras={carreras}
                nombrecarrera={facultad.nombre}
              />
            ))
          : null}
        <br />
        <hr />
        <div className="row">
          <div className="col col-lg-6 col-md-12 col-sm-12">
            <h6 className="lead m-3">Deja tus comentarios</h6>
            <Feedbacks />
          </div>
        </div>
      </div>
    );
}
