import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

//creando el context
export const AlumnosContext = createContext();

// Provider
const AlumnosProvider = (props) => {
    const [alumnos, guardarAlumnosLista] = useState([]);

    //ejecutar llamado a la api
    useEffect(() => {
      
        const obtenerListaAlumnos = async() => {
            const url = `http://localhost:8000/api/alumno/`;
            const alumnos = await axios(url);
            guardarAlumnosLista(alumnos.data);
        }
        obtenerListaAlumnos();
    }, [])
    return (
        <AlumnosContext.Provider
            value={{
                alumnos
            }}
            >
            {props.children}
        </AlumnosContext.Provider>
    )
}
export default AlumnosProvider;