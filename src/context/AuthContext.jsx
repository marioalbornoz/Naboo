import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [ismounted, guardarIsmounted] = useState(false);
    const [datos, setdatos] = useState({
      username: "",
      password: "",
    });
    const guardarNombre = (a) => {
      const nombre = a;
      return nombre;
    }
    return (
      <AuthContext.Provider
        value={{ datos, setdatos, guardarNombre, ismounted, guardarIsmounted }}
      >
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthProvider;