import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

//creando el context
export const AlumnosContext = createContext();

// Provider
const AlumnosProvider = (props) => {
    const [alumnos, guardarAlumnosLista] = useState([]);
    const [idUsuario, guardarIdUsuario] = useState(null);

    const decodePayload=()=>{
        const token = localStorage.getItem("token");
        console.log("token: ", token);
        if(token){
            const payload = token.split('.')[1];
            const cadena=JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
            guardarIdUsuario(cadena.user_id);
        } else{
            return ;
        }
        
    }

    //ejecutar llamado a la api
    useEffect(() => {
      
        const obtenerListaAlumnos = async() => {
            const url = `http://localhost:8000/api/alumno/`;
            const alumnos = await axios(url);
            guardarAlumnosLista(alumnos.data);
        }
        obtenerListaAlumnos();
        decodePayload()
    }, [])
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