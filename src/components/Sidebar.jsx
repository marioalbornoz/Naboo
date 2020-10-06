import React, { useContext } from 'react'
import { AlumnosContext } from '../context/AlumnosContext';
import { UserContext } from '../context/UserContext';
import Avatar from "../avatarHombre.png";

export const Sidebar = () => {

  const { idUsuario } = useContext(AlumnosContext);
  const { usuarios } = useContext(UserContext);
    return (
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item usuarioSidebar">
              {usuarios.data && idUsuario ? (
                usuarios.data
                  .filter((user) => user.id === idUsuario)
                  .map((usuario) => (
                    <a
                      className="nav-link text-capitalize"
                      href="!#"
                      key={idUsuario}
                    >
                      <img
                        className="rounded-circle logo mb-1"
                        src={Avatar}
                        alt="perfil"
                        style={{ height: 30 }}
                      />
                      {" "}
                      {usuario.username}{" "}
                      
                    </a>
                  ))
              ) : (
                <a
                  className="nav-link dropdown-toggle"
                  href="!#"
                  key={idUsuario}
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Tiempo de conexion agotado
                </a>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">
                <i className="fas fa-home mr-2" />
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/profesores">
                <i className="fas fa-chalkboard-teacher mr-2" />
                Profesores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="!#">
                Funcionarios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/alumnos">
                <i className="fas fa-user-graduate mr-2" />
                Alumnos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="!#">
                Integrations
              </a>
            </li>
          </ul>
          
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="!#">
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="!#">
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="!#">
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="!#">
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
      //     <aside class="col-12 col-md-2 p-0 bg-light">
      //     <nav class="navbar navbar-expand navbar-light bg-light flex-md-column flex-row align-items-start">
      //         <div class="collapse navbar-collapse">
      //             <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
      //                 <hr/>
      //                 <li class="nav-item">
      //                     <a class="nav-link pl-0" href="#">Link</a>
      //                 </li>
      //                 <li class="nav-item">
      //                     <a class="nav-link pl-0" href="#">Link</a>
      //                 </li>
      //                 <li class="nav-item">
      //                     <a class="nav-link pl-0" href="#">Link</a>
      //                 </li>
      //                 <li class="nav-item">
      //                     <a class="nav-link pl-0" href="#">Link</a>
      //                 </li>
      //                 <li class="nav-item">
      //                     <a class="nav-link pl-0" href="#">Link</a>
      //                 </li>
      //             </ul>
      //         </div>
      //     </nav>
      // </aside>
    );
}
