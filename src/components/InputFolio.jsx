import React, { useState } from 'react'

export const InputFolio = () => {


    // const leerHistoria = (e) => {
    //     guardarHistoria(e.target.value);
    // }
    // console.log(historia);

    return (
      <div className="input-group mb-3 h-200">
        <textarea
          type="text"
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
      </div>
    );
}
