import React,{ useContext } from "react"
import { Context } from "../ContextApi"
import { useNavigate } from 'react-router-dom';


const useAuth =()=>{
    const {isLogin,HandleLoginState,HandleLogoutState,HandleRegState} = useContext(Context)
  const Navigate = useNavigate()
    
const userAuth=async()=>{

    await fetch("/api/admin/refresh",{
         method:"GET",  
         headers:{
           Accept:"application/json",
           "Content-Type":"application/json",
         },
         credentials:'include',
       }).then((response) =>{
           if(response.status==200){
                
         console.log("userAuth_Login")
         Navigate("/")  
         
         HandleLoginState();

         console.log("refreshUSer", response.status)
             }
     else{
 
     console.log('User invalid');
     
     }
     
     })
     
 }
 

 
    const CheckUser = ()=>{
        
          
        if(isLogin){
            console.log("login ifIN Useauth")
            return true
        }
        else{
            console.log("logout ifIN Useauth")
            return false
        }
    };
    

    const LoginUser=()=>{
        console.log("auth_Login")
        HandleLoginState();
    };

    const LogoutUser=()=>{
        console.log("auth_Logout")
        HandleLogoutState();
    };

    const RegUser=()=>{
        console.log("auth_Register")
        HandleRegState();
    };
 

    return {CheckUser,LoginUser,LogoutUser,RegUser,userAuth}
    
}

export {useAuth}