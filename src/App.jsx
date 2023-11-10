import { Routes,Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import NewPost from "./Component/NewPost";
import AllPost from "./Component/AllPost";
import Users from "./Component/Users";
import TextEditor from "./Component/TextEditor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {

  return (
    <Routes>
      
      <Route path="/" element={<Navbar/>} >
        <Route index element={<Home/>} />
        <Route path="newpost" element={<NewPost/>} />
        <Route path="allpost" element={<AllPost/>} />
        <Route path="editor" element={<TextEditor/>} />
        <Route path="users" element={<Users />} />
      
      </Route>
      
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />

    </Routes>
  )

}

export default App




