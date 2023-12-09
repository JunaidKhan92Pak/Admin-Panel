import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth'
// import Login from '../Pages/Login'


const AdminProtectedRoute = () => {
  const Navigate = useNavigate()
  const {CheckUser,LoginUser} = useAuth();
  const [login,setLogin] = useState(CheckUser());
  
  
  const HandleCheck = ()=>{
    
    // LoginUser()
    
    let res = CheckUser()
    setLogin(res)

    console.log(login,res," is that true")
    
    if(res){
      Navigate("/")
    }
    else{
      Navigate("/login")
    }
  }

  useEffect(()=>{

    HandleCheck();
  },[login])
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AdminProtectedRoute