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
    return (
      <div className="col col-12 m-4 ">
        <form className="form-inline m-4 ">
          <div className="form-group mb-2">Buscar alumno</div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="text" className="sr-only">
              Alumno
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Ej. Albornoz"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Buscar
          </button>
        </form>

        <div className="card table-responsive  shadow">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Alumno</th>
                <th>Rut</th>
                <th>Carrera</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id} >
                  <td>
                    {alumno.nombres} {alumno.apellidos}
                  </td>
                  <td>{alumno.rut}</td>
                  <td>{alumno.codigo}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => seleccionAlumno(alumno)}
                      className="btn btn-success"
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
    );
}
