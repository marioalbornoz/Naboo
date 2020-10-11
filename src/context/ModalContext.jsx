import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";
import Config from '../utils/Config';
import { Redirect } from 'react-router-dom';
// import AuthHandler from '../utils/AuthHandler';

//creando el context
export const ModalContext = createContext();

// Provider
const ModalProvider = (props) => {
    // const [historia, guardarHistoria] = useState("");
    const [content, guardarContent] = useState("");
    const [idUser, guardarIdUser] = useState(1);

    //ejecutar llamado a la api
    useEffect(() => {
      
        try {
          if(content){
            const enviarFolio = axios.post(Config.listFolios, {
              content: content,
              user: idUser
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.error(error);
            });
          enviarFolio();
          }
          else{
            return ;
          }
        } catch (error) {
          console.error(error);
          if(error.status===401){
            window.location = Config.logoutPageUrl;
          }
        }
 }, [content, idUser])
    return (
        <ModalContext.Provider
            value={{
                // guardarHistoria,
                guardarContent,
                guardarIdUser
            }}
            >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;