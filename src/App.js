import React from 'react';
// import { Sidebar } from './components/Sidebar';
import { ContenrHome } from './pages/ContentHome';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
// import { home } from './pages/home';
// import './components/sidebar'
import { Alumnos } from './pages/Alumnos';
import { Profesores } from './pages/Profesores';
import AlumnosProvider from './context/AlumnosContext';
import FolioProvider from './context/FolioContext';
import { Login } from './pages/Login';
import { Inicio } from './pages/Inicio';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <AlumnosProvider>
        <FolioProvider>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <Switch>
                <Route exact path="/alumnos" component={Alumnos} />
                <Route exact path="/profesores" component={Profesores} />
                <Route exact path="/" component={ContenrHome} />
              </Switch>
            </div>
          </div>
        </FolioProvider>
      </AlumnosProvider>
      </Switch>

      {/* <AlumnosProvider>
        <FolioProvider>
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <Switch>
                <Route path="/alumnos" component={Alumnos} />
                <Route path="/profesores" component={Profesores} />
                <Route path="/inicio" component={ContenrHome} />
              </Switch>
            </div>
          </div>
        </FolioProvider>
      </AlumnosProvider> */}
    </Router>
  );
}

export default App;
