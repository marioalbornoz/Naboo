import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";
import AuthHandler from '../utils/AuthHandler';
import Config from '../utils/Config';
import { reactLocalStorage } from 'reactjs-localstorage';
// import APIHandler from '../utils/APIHandler';

//creando el context
export const FolioContext = createContext();
// Provider
const FolioProvider = (props) => {
    const [folios, guardarFolioLista] = useState([]);
    const [indice, setindice] = useState({})
    //ejecutar llamado a la api
    useEffect(() => {
      
            const obtenerListaFolio = async() => {
                try {
                  console.log(localStorage.getItem("token"));
                  const allfolio = await axios.get(Config.listFolios, {
                    headers: {
                      Authorization: `JWT ${localStorage.getItem("token")}`,
                    },
                  });
                  guardarFolioLista(allfolio.data.data);
                } catch (error) {
                    console.error(error);
                }
            }
            obtenerListaFolio();
       
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