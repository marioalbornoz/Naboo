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
import { PrivateRoute } from './utils/PrivateRoute';
import { Logout } from './pages/Logout';
import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <UserProvider>
            <AlumnosProvider>
              <FolioProvider>
                <Navbar />
                <div className="container-fluid">
                  <div className="row">
                    <Sidebar />
                    <Switch>
                      <PrivateRoute exact path="/alumnos" component={Alumnos} />
                      <PrivateRoute
                        exact
                        path="/profesores"
                        component={Profesores}
                      />
                      <PrivateRoute exact path="/" component={ContenrHome} />
                    </Switch>
                  </div>
                </div>
              </FolioProvider>
            </AlumnosProvider>
          </UserProvider>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
