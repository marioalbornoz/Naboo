import React, { useContext } from 'react';
import { useEffect } from 'react';
import { AlumnosContext } from '../context/AlumnosContext';
import { AuthContext } from '../context/AuthContext';
// import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import Config from '../utils/Config';

export const Navbar = () => {
  const {guardarIsmounted} = useContext(AuthContext);
  const { idUsuario } = useContext(AlumnosContext);
  const {usuarios} = useContext(UserContext);
  useEffect(()=>{
    guardarIsmounted(true)
  }, [guardarIsmounted])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        FolioE UTEM
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-md-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Inicio <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profesores">
              Profesor
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alumnos">
              Alumnos
            </a>
          </li>
          <li className="nav-item dropdown">
            
              {usuarios.data && idUsuario
                ? usuarios.data
                    .filter((user) => user.id === idUsuario)
              .map(usuario => <a
                className="nav-link dropdown-toggle"
                href="!#"
                key={idUsuario}
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              > Bienvenido {usuario.username}</a>)
                : null}
            
            <div
              className="dropdown-menu shadow"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="!#">
                Acerca
              </a>
              <a className="dropdown-item" href="!#">
                Perfil
              </a>
              <a className="dropdown-item" href={Config.logoutPageUrl}>
                Cerrar sesion
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
