import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";
import Config from '../utils/Config';
// import AuthHandler from '../utils/AuthHandler';

//creando el context
export const CarreraContext = createContext();

// Provider
const CarreraProvider = (props) => {
    // const [historia, guardarHistoria] = useState("");
    const [facultades, guardarFacultad] = useState([])
    const [carreras, guardarCarrera] = useState([])

    
    //ejecutar llamado a la api
    useEffect(()=> {
      try {
        const obtenerFacultades = async() => {
          const facultades = await axios(Config.facultades, {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            }})
          guardarFacultad(facultades.data);
        }
        obtenerFacultades();
      } catch (error) {
        console.error(error);
      }
      
      
    }, [])
  
    useEffect(()=> {
      try {
        const obtenerEscuelas = async() => {
          const carreras = await axios(Config.carreras, {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            }})
          guardarCarrera(carreras.data.data);
        }
        obtenerEscuelas();
      } catch (error) {
        console.error(error);
      }
      
      
    }, [])
    return (
        <CarreraContext.Provider
            value={{
                carreras,
                facultades,
            }}
            >
            {props.children}
        </CarreraContext.Provider>
    )
}
export default CarreraProvider;