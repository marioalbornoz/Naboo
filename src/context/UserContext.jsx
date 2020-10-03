import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Config from '../utils/Config';

// Creando context
export const UserContext = createContext();

// Provider
const UserProvider = (props) => {
    const [usuarios, guardarUsuario] = useState([]);

    // llamado a la api
    useEffect(() => {
        const obtenerUsuarios = async() => {
            try {
                const usuarios = await axios(Config.listaUsuarios, {
                    headers: {
                      Authorization: `JWT ${localStorage.getItem("token")}`,
                    },
                  });
                  guardarUsuario(usuarios);
            } catch (error) {
                console.error(error);
            }
        }
        obtenerUsuarios()
    }, []);

    return (
      <UserContext.Provider value={{ usuarios }}>
        {props.children}
      </UserContext.Provider>
    );
}
export default UserProvider;