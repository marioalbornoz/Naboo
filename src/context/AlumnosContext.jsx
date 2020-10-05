import React, { createContext, useState, useEffect, useContext } from 'react'
import axios from "axios";
import AuthHandler from '../utils/AuthHandler';
import { AuthContext } from './AuthContext';
// import { Redirect } from 'react-router-dom';
// import Config from '../utils/Config';
import { Redirect } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

//creando el context
export const AlumnosContext = createContext();

// Provider
const AlumnosProvider = (props) => {
    const {ismounted} = useContext(AuthContext)
    
    const [alumnos, guardarAlumnosLista] = useState([]);
    const [idUsuario, guardarIdUsuario] = useState(null);

    const decodePayload=()=>{
        const token = localStorage.getItem("token");
        if (token) {
          const payload = token.split(".")[1];
          const cadena = JSON.parse(
            Buffer.from(payload, "base64").toString("utf8")
          );
          guardarIdUsuario(cadena.user_id);
        } else {
          return;
        }
        
    }

    //ejecutar llamado a la api
    useEffect(() => {
        if(ismounted){
            try {
                const obtenerListaAlumnos = async() => {
                    const url = `http://localhost:8000/api/alumno/`;
                    const alumnos = await axios(url);
                    guardarAlumnosLista(alumnos.data);
                    
                }
                obtenerListaAlumnos();
                decodePayload()
            } catch (error) {
                console.error(error);
                if(error.status!==401) {
                    AuthHandler.logoutUser();
                    return <Redirect to="/logout"/>;
                }
            }
        }
    }, [ismounted])
    return (
        <AlumnosContext.Provider
            value={{
                alumnos,
                idUsuario
            }}
            >
            {props.children}
        </AlumnosContext.Provider>
    )
}
export default AlumnosProvider;