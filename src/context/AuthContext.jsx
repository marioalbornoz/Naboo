import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [datos, setdatos] = useState({
      username: "",
      password: "",
    });
    const guardarNombre = (a) => {
      const nombre = a;
      return nombre;
    }
    return (
      <AuthContext.Provider value={{ datos, setdatos, guardarNombre }}>
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthProvider;