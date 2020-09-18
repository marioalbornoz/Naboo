import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

//creando el context
export const FolioContext = createContext();

// Provider
const FolioProvider = (props) => {
    const [folios, guardarFolioLista] = useState([]);
    const [indice, setindice] = useState({})
    //ejecutar llamado a la api
    useEffect(() => {
      
        const obtenerListaFolio = async() => {
            const url = `http://localhost:8000/api/folio/`;
            const folios = await axios(url);
            guardarFolioLista(folios.data);
        }
       // obtenerListaFolio();
    }, [])
    return (
        <FolioContext.Provider
            value={{
                folios,
                setindice,
                indice
            }}
            >
            {props.children}
        </FolioContext.Provider>
    )
}
export default FolioProvider;