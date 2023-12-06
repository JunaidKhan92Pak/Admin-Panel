import React,{createContext, useState} from 'react'

const Context = createContext()
const index = ({children}) => {
    const [isLogin,setIsLogin] = useState(false);
    const HandleLoginState = ()=>{
        setIsLogin(true)
    }
    const HandleLogoutState = (state)=>{
      setIsLogin(false)
  }

  return (
    <>
    <Context.Provider value={{isLogin,HandleLoginState}} >
    {children}
    </Context.Provider>
    </>
  )
}

export default index
export {Context}