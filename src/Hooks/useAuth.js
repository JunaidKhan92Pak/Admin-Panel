import React,{ useContext } from "react"
import { Context } from "../ContextApi"


const useAuth =()=>{
    const {isLogin,HandleLoginState} = useContext(Context)
    const CheckUser = ()=>{
        if(isLogin){
            return true
        }
        else{
            return false
        }
    };
    const LoginUser=()=>{
        console.log("hello there")
        HandleLoginState(true);
    };
    return {CheckUser,LoginUser}
    

}
export {useAuth}