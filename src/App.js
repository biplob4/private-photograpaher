import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Signup from "./Pages/Login/Signup/Signup";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Sheard/Header/Header";
import CheckOut from "./Pages/CheckOut/CheckOut";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import RequireAuth from "./Pages/Sheard/RequrieAuth/RequireAuth";
import Footer from "./Pages/Sheard/Footer/Footer";
import ForOFor from "./Pages/Sheard/ForOFor/ForOFor";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/servic/:id" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<ForOFor />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
