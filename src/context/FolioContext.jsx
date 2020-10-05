import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Config from "../utils/Config";
import AuthHandler from "../utils/AuthHandler";
import { AuthContext } from "./AuthContext";

//creando el context
export const FolioContext = createContext();
// Provider
const FolioProvider = (props) => {
  const {ismounted} = useContext(AuthContext)
  const [folios, guardarFolioLista] = useState([]);
  const [indice, setindice] = useState({});
  const [actualizar, guardarActuaizar] = useState(false);
  
  //ejecutar llamado a la api
  useEffect(() => {
    if(ismounted){
      const obtenerListaFolio = async () => {
        try {
          const allfolio = await axios.get(Config.listFolios, {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`,
            },
          });
          guardarFolioLista(allfolio.data.data);
          return;
        } catch (error) {
          console.error(error);
          if(error.status!==401) {
            AuthHandler.logoutUser();
            return;
          }
        }
      };
      if (!actualizar) {
        obtenerListaFolio();
      } else {
        obtenerListaFolio();
      }
    }
  }, [actualizar,ismounted]);
  return (
    <FolioContext.Provider
      value={{
        folios,
        setindice,
        indice,
        guardarActuaizar,
      }}
    >
      {props.children}
    </FolioContext.Provider>
  );
};
export default FolioProvider;
