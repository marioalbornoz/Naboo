import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const [idUser, guardarIdUser] = useState("");

    const decodePayload=()=>{
        const token = localStorage.getItem("token");
        console.log("token: ", token);
        if(token){
            const payload = token.split('.')[1];
            const cadena=JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
            console.log(cadena.user_id);
        } else{
            return ;
        }
        
    } 

    decodePayload()
    return (
      <AuthContext.Provider value={{ idUser, guardarIdUser }}>
        {props.children}
      </AuthContext.Provider>
    );
}

export default AuthProvider;