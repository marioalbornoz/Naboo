import React from 'react'
import { useContext } from 'react';
import { Facultad } from '../components/Facultad'
import { Feedbacks } from '../components/Feedbacks'
import { CarreraContext } from '../context/CarreraContext'
import { PerfilContext } from '../context/PerfilContext'


export const ContenrHome = () => {

  const {carreras, facultades} = useContext(CarreraContext)
  const { perfil } = useContext(PerfilContext);
    
    const facultadUsuario = facultades.filter( facultad => facultad.nombre===perfil.facultad)
    const todasFacultades = facultades.filter(facultad => facultad.nombre !== 'Todas')
    console.log('====================================');
    console.log(Object.values(todasFacultades));
    console.log('====================================');
    
    return (
      <div id="content" className="p-4 p-md-5 col-lg-10 col-md-9">
        <h6 className="mb-4 lead">Folio Estudiantil</h6>
        {/* {facultades
          ? facultades.filter(facultadfilter=> facultadfilter.nombre !== 'Todas').map((facultad) => (
              <Facultad
                key={facultad.id}
                carreras={carreras}
                nombrecarrera={facultad.nombre}
              />
            ))
          : facultadUsuario ? facultadUsuario.map(facultad => (
            <Facultad key={facultad.id} carreras={carreras} nombrecarrera={facultad.nombre} /> 
          )):null } */}

        {facultadUsuario.length !== 0 ? (
          facultadUsuario[0].nombre !== "Todas" ? (
            facultadUsuario.map((facultad) => (
              <Facultad
                key={facultad.id}
                carreras={carreras}
                nombrecarrera={facultad.nombre}
              />
            ))
          ) : (
            todasFacultades.map((facultad) => (
              <Facultad
                key={facultad.id}
                carreras={carreras}
                nombrecarrera={facultad.nombre}
              />
            ))
          )
        ) : (
          <p>Usuario sin Facultad</p>
        )}
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
