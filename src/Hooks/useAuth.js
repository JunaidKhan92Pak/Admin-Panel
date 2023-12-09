import React,{ useContext } from "react"
import { Context } from "../ContextApi"


const useAuth =()=>{
    const {isLogin,HandleLoginState,HandleLogoutState,HandleRegState} = useContext(Context)
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


    return {CheckUser,LoginUser,LogoutUser,RegUser}
    
}

export {useAuth}