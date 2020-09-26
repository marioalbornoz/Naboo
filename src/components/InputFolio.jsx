import React, { useContext, useState } from 'react'
import { AlumnosContext } from '../context/AlumnosContext';
import Config from '../utils/Config';
import { FolioContext } from '../context/FolioContext';
// import APIHandler from '../utils/APIHandler';

export const InputFolio = () => {
  // Utiliza useContext
  const { idUsuario } = useContext(AlumnosContext);
  const {indice, guardarActuaizar} = useContext(FolioContext)
  // const { guardarContent } = useContext(ModalContext);
  const [formulario, guardarForm] = useState("")

  // useEffect(() => {
  //   guardarActuaizar(true);
  // }, []);
    const enviarFormulario = async (e) =>{
      e.preventDefault();
      console.log(formulario, indice.id, idUsuario);
      const res = await fetch(Config.listFolios, {
        method: "POST",
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content: formulario,
          user: idUsuario,
          alumno: indice.id,
        }),
      });
      const data = await res.json();
      guardarActuaizar(true);
      guardarForm("")
      console.log(data);
    }

  const leerHistoria = (e) => {
    guardarForm(e.target.value);
  };

  return (
    <form onSubmit={enviarFormulario} className="input-group mb-3 h-200">
      <textarea
        type="text"
        name="content"
        id="content"
        value={formulario}
        onChange={leerHistoria}
        className="form-control redondeado h-200"
        placeholder="Ingresa tu texto aqui"
        aria-label="Ingresa tu texto aqui"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary redondeado">
          Enviar
        </button>
      </div>
    </form>
  );
}
