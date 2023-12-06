import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth'
// import Login from '../Pages/Login'


const AdminProtectedRoute = () => {
  const Navigate = useNavigate()
  const {CheckUser,LoginUser} = useAuth();

  
  const HandleCheck = ()=>{
    LoginUser()
    let res = CheckUser()
    if(!res){
      Navigate("/login")
    }
  }
  useEffect(()=>{
    HandleCheck();
  },[])
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AdminProtectedRoute