import React from 'react'
import { Navigate } from 'react-router-dom'

type Itype= {
user: boolean,
children : any
}
const ProtectedRoute = ({user, children}: Itype) => {
  if(!user){
    return <Navigate to={"/login"} replace/>
  }
  return children
}

export default ProtectedRoute