import React, { useContext } from 'react'
import { FolioContext } from '../context/FolioContext'

export const Report = () => {
    const {
      foliostotales,
      foliospriorityone,
      foliosprioritytwo,
      foliosmes,
      mes,
      guardarMes,
    } = useContext(FolioContext);
    
    return (
      <div className="col-lg-9 col-md-8 mt-5 perfil">
        <div className="row">
          <div className="col">
            <h6 className="lead">Reportes</h6>
            {foliostotales && foliospriorityone && foliosprioritytwo ? (
              <div>
                <p className="">
                  Cantidad de reportes ingresados: {foliostotales}
                </p>
                <p className="">
                  Cantidad de reportes ingresados con prioridad 1:{" "}
                  {foliospriorityone.length}
                </p>
                <p className="">
                  Cantidad de reportes ingresados con prioridad 2:{" "}
                  {foliosprioritytwo.length}
                </p>
              </div>
            ) : null}
            {

            }
          </div>
        </div>
      </div>
    );
}
