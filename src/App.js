import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";


function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/checkout" element={<Home />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
