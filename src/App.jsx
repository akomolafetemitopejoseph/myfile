import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import User from "./pages/User";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/User" element={<User />} />
      <Route path="products" element={<Products />}/>
      
    </Routes>
  );
}

export default App;
