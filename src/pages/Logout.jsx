import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthHandler from '../utils/AuthHandler'
import { Login } from './Login'




export const Logout = () => {

    AuthHandler.logoutUser()

    return (
        
            <Redirect to={Login} />
        
    )
}
