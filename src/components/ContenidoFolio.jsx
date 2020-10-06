import React from 'react'
import "./styles.css";
import perfil from "../avatarHombre.png"

export const ContenidoFolio = ({folioalumno}) => {

  const formatofecha = (date) => {
    const dato = date.split(".")[0]
    const fecha = dato.split("T")[0]
    const hora = dato.split("T")[1]
    return [
      hora,
      "  ",
      fecha
  ]
  }
    return (
      <div key={folioalumno.id} className="tarjeta shadow mb-3">
        <div className="picture">
          <img
            className="imagen"
            src={perfil}
            alt={`foto de ${folioalumno.alumno}`}
          />
        </div>
        <div className="content">
          <div className="titulo">
            <div className="usuario">
              <h6 className="card-title activator grey-text text-darken-4">
                {folioalumno.usuario}
              </h6>
            </div>

            <div className="tarjeta-fecha">
              <p>
                {formatofecha(folioalumno.created).map((tiempo) => (
                  <span>{tiempo}</span>
                ))}
              </p>
            </div>
          </div>

            <div className="row contenido">
              <div className="col">
                <p className="text-justify">{folioalumno.content}</p>
              </div>
            </div>
          </div>
      </div>
    );
}
