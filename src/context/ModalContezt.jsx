import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

//creando el context
export const ModalContext = createContext();

// Provider
const ModalProvider = (props) => {
    const [historia, guardarHistoria] = useState("");
    const [alumno, guardarAlumno] = useState({});

    const {id} = alumno;
    //ejecutar llamado a la api
    useEffect(() => {
      
        const enviarHistoria = async() => {
            const url = `http://localhost:8000/api/folio/`;
            const folios = await axios.post(url)
        }
        enviarHistoria();
    }, [id])
    return (
        <ModalContext.Provider
            value={{
                guardarHistoria,
                guardarHistoria
            }}
            >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;