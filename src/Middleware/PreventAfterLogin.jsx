import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth'


const PreventAfterLogin = () => {
  const Navigate = useNavigate()
  const {CheckUser} = useAuth();
  const {userAuth} = useAuth();
  
  
  const HandleCheck = ()=>{
    userAuth()
    console.log("hello dksadjs dsa",CheckUser())
    let res = CheckUser()
    if(res){
      Navigate("/")
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

export default PreventAfterLogin