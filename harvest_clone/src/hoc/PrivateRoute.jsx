import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate} from "react-router-dom";

const PrivateRouter = ({children}) => {
    const token = useSelector((store)=>store.auth.token);

    if(token){
        return children
    }
  return <Navigate to="/signin" />
}

export default PrivateRouter