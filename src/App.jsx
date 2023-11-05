import { Routes,Route } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import NewPost from "./Component/NewPost";
import AllPost from "./Component/Allpost";
import Users from "./Component/Users";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>} >
        <Route index element={<Home/>} />
        <Route path="newpost" element={<NewPost/>} />
        <Route path="allpost" element={<AllPost/>} />
        <Route path="users" element={<Users />} />
      </Route>


    </Routes>
  )

}

export default App




