import React from 'react';
import { TarjetaContenidos } from '../components/TarjetaContenidos';


export const TarjetasHistorial = ({folios, perfil, filtrado, rolfilter}) => {
    const {rol} = perfil.perfil
    // console.log(perfil.perfil.rol);

    // const usuariosSesaes = data ? data.filter(sesaes => sesaes.rol === 5) : null
    const foliosUser = folios ? folios.folios.filter(foliofilter => foliofilter.rol === filtrado):null

    return (
        <div className="col-lg-9 col-md-8 col-sm-12 m-4">
          <h4 className="lead m-4 animate__animated ">Historial ingresado por {filtrado.toUpperCase()}</h4>
          {rol === rolfilter
            ? foliosUser.map((folio, i) => (
                <TarjetaContenidos key={i} folio={folio} oculto ={null} />
              )) 
              : foliosUser.map((folio, i) => (
                  <TarjetaContenidos key={i} folio={folio} oculto={true} />
             ))
          }
        </div>
      );
}
