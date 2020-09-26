import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Config from "../utils/Config";

//creando el context
export const FolioContext = createContext();
// Provider
const FolioProvider = (props) => {
  const [folios, guardarFolioLista] = useState([]);
  const [indice, setindice] = useState({});
  const [actualizar, guardarActuaizar] = useState(false);
  // const [idUser, guardarID] = useState(undefined);
  //ejecutar llamado a la api
  useEffect(() => {
    const obtenerListaFolio = async () => {
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
    };
    if (!actualizar) {
      obtenerListaFolio();
    } else {
      obtenerListaFolio();
    }
  }, [actualizar]);
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
