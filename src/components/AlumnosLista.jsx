import React, { useContext } from 'react'
import { AlumnosContext } from '../context/AlumnosContext';
import { FolioContext } from '../context/FolioContext';

// import "./modal";
import { ModalFolio } from './ModalFolio';

export const AlumnosLista = () => {
  const {alumnos} = useContext(AlumnosContext)
  const {setindice} = useContext(FolioContext)
  // const [indice, guardarIndice] = useState("")

  const seleccionAlumno = (id) => {
    setindice(id);
  }
    return alumnos ? (
      <div className="col col-12 ">
        <form className="input-group mb-3 h-200">
        <input
          type="text"
          name="content"
          id="content"
          
          className="form-control redondeado h-200"
          placeholder="Usa este buscador para encotrar a quien buscas (Ejemplo: Albornoz)"
          aria-label="Ingresa tu texto aqui"
          aria-describedby="basic-addon2"
          
        />
        <div className="input-group-append">
          <button className="btn btn-primary redondeado" type="button">
            Buscar
          </button>
        </div>
      </form>

        <div className="card table-responsive redondeado shadow">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Alumno</th>
                <th className="rut">Rut</th>
                <th>Carrera</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, i) => (
                <tr key={i}>
                  <td>
                    {alumno.nombres} {alumno.apellidos}
                  </td>
                  <td className="rut">{alumno.rut}</td>
                  <td>{alumno.carrera.codigo}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => seleccionAlumno(alumno)}
                      className="btn btn-secondary "
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      Folio
                    </button>
                    <ModalFolio />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <p>No hay alumnos</p>
    );
}
