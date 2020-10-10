import React, { Fragment, useContext } from 'react'
import { PerfilContext } from '../context/PerfilContext';

export const Perfil = () => {
  const { perfil } = useContext(PerfilContext);
    const {username, email, groups} = perfil;
    const idPerfil = (
      groups ? groups.map(perfil => (
        perfil.name)
       ) : null
    )
    return perfil ? (
      
        <Fragment>
        {username}
        {email}
        {idPerfil}
        </Fragment>
      
    ) : null;

}
