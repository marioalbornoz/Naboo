import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";
import Config from '../utils/Config';
import AuthHandler from '../utils/AuthHandler';

//creando el context
export const ModalContext = createContext();

// Provider
const ModalProvider = (props) => {
    const [historia, guardarHistoria] = useState("");
    const [alumno, guardarAlumno] = useState({});

    const {id} = alumno;
    //ejecutar llamado a la api
    useEffect(() => {
      
        const axiosAPI = axios.create({
            baseURL: Config.listFolios,
            timeout: 5000,
            headers: {
              Authorization: AuthHandler.getLoginToken() ? "Bearer " + AuthHandler.getLoginToken() : null,
              "Content-Type": "application/json",
              accept: "application/json",
            },
          });
        axiosAPI();
 }, [])
    return (
        <ModalContext.Provider
            value={{
                guardarHistoria,
            }}
            >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;