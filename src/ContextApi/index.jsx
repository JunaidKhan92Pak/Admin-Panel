import React,{createContext, useState} from 'react'

const Context = createContext()
const index = ({children}) => {
    const [isLogin,setIsLogin] = useState(false);
    const HandleLoginState = ()=>{
      console.log("index login")
    
      setIsLogin(true)
    }

    const HandleLogoutState = ()=>{
      console.log("index logout")
      setIsLogin(false)
  }

  const HandleRegState = ()=>{
    console.log("index login")
    setIsLogin(true)
  }

  return (
    <>
    <Context.Provider value={{isLogin,HandleLoginState,HandleLogoutState,HandleRegState }} >
    {children}
    </Context.Provider>
    </>
  )
}

export default index
export {Context}