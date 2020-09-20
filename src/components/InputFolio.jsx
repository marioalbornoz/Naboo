import React from 'react'
// import APIHandler from '../utils/APIHandler';

export const InputFolio = () => { 

      const leerHistoria = (e) => {
        // console.log(e.target.value);
      };
    return (
      <form className="input-group mb-3 h-200">
        <textarea
          type="text"
          name="content"
          id="content"
          onChange={leerHistoria}
          className="form-control redondeado h-200"
          placeholder="Ingresa tu texto aqui"
          aria-label="Ingresa tu texto aqui"
          aria-describedby="basic-addon2"
          
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary redondeado" type="button">
            Enviar
          </button>
        </div>
      </form>
    );
}
