import React, { useContext } from 'react';
import { Routes,Route } from "react-router-dom";

// import { AuthProvider } from "./Pages/AuthContext";
// import PrivateRoute from './Pages/PrivateRoute';
// import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import NewPost from "./Component/NewPost";
import AllPost from "./Component/AllPost";
import Users from "./Component/Users";
import TextEditor from "./Component/TextEditor";
import Messages from "./Component/Messages";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminProtectedRoute from './Middleware/AdminProtectedRoute';
import PreventAfterLogin from './Middleware/PreventAfterLogin';

// const {isLogin} = useContext(ContextApi)

const App = () => {

  return (
    // <AuthProvider>
    // <Switch>
    // </Switch>
    // </AuthProvider>
    <Routes>
      <Route element={<AdminProtectedRoute/>}>
      <Route path="/" element={<Navbar/>} >
        <Route index element={<Home/>} />
        <Route path="newpost" element={<NewPost/>} />
        <Route path="allpost" element={<AllPost/>} />
        <Route path="editor" element={<TextEditor/>} />
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />

       </Route>
      </Route> 

      
      <Route element={<PreventAfterLogin/>}>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Route>
    </Routes>

  )
    
}

export default App




