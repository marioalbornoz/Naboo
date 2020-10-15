import React from 'react'
import { useState } from 'react'

export const Feedbacks = () => {
    const [comentarios, guardarComentarios] = useState("");

    const getInput = (e) => {
        guardarComentarios(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('====================================');
        console.log(comentarios);
        console.log('====================================');
    }
    return (
      <form onSubmit={handleSubmit}>
        <textarea name="feedback" id="feedback" onChange={getInput} value={comentarios}  className="form-control"></textarea>
        <button className="btn btn-outline-primary btn-block">Enviar</button>
      </form>
    );
}
