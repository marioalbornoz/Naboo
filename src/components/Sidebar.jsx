import React from 'react'

export const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
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
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a className="d-flex align-items-center text-muted text-secondary" href="!#" aria-label="Add a new report">
            </a>
          </h6>
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
