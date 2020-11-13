import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { PerfilContext } from '../context/PerfilContext';

export const NuevoUser = () => {
    const {perfil} = useContext(PerfilContext);
    const [datos, guardarDatos] = useState({
        username:"",
        email:"",
        password:"",
        firstname:"",
        lastname:"",
        rol:null,
        facultad: perfil.facultad,
        escuela: perfil.escuela,
        carrera:perfil.carrera

    });

    const handleInput = (e) => {
        guardarDatos({
          ...datos,
          [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(datos);
    }
    return (
      <div className="row">
        <div className="col">
          <form className="form-control" onSubmit={handleSubmit}>
            <input
              className="input-group"
              type="text"
              name="username"
              placeholder="Usuario"
              onChange={handleInput}
              required
            />
            <input
              className="input-group"
              name="email"
              type="email"
              placeholder="Correo"
              onChange={handleInput}
              required
            />
            <input
              className="input-group"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              required
            />
            <input
              className="input-group"
              type="text"
              name="firstname"
              placeholder="Nombres"
              onChange={handleInput}
              required
            />
            <input
              className="input-group"
              type="text"
              name="lastname"
              placeholder="Apellidos"
              onChange={handleInput}
              required
            />
            {perfil.rol === 3 ? (
              <select name="rol" onChange={handleInput}>
                <option value="">---Tipo de usuario---</option>
                <option value={4}>Jefe de carrera</option>
              </select>
            ) : perfil.rol === 4 ? (
              <select name="rol" onChange={handleInput}>
                <option value="">---Tipo de usuario---</option>
                <option value={1}>Academico</option>
                <option value={8}>Otro</option>
              </select>
            ) : perfil.rol === 5 ? (
              <select name="rol" onChange={handleInput}>
                <option value="">---Tipo de usuario---</option>
                <option value={5}>Sesaes</option>
              </select>
            ) : null}
            <select name="facultad" onChange={handleInput}>
              <option value="">--Facultad--</option>
              {perfil.rol !== 5 ? (
                <>
                  <option value={1}>Ingenieria</option>
                  <option value={2}>administracion y economia</option>
                  <option value={3}>
                    Ciencias de la construccion y ordenamiento territorial
                  </option>
                  <option value={4}>
                    Ciencias naturales, matematica y medio ambiente
                  </option>
                  <option value={5}>Academico</option>
                  <option value={6}>
                    Humanidades y tecnologias de la comunicacion social
                  </option>{" "}
                </>
              ) : (
                <option value={7}>Todas</option>
              )}
            </select>
            <input type="submit" value="Agregar" />
          </form>
        </div>
      </div>
    );
}
