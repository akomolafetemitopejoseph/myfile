import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import User from "./pages/User";
import Products from "./pages/Products";
import UserCard from "./pages/UserCard";
import PostPage from "./pages/postPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("")
  return (
    <>
      <Navbar firstName={firstName}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login setFirstName={setFirstName}/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/User" element={<User />} />
        <Route path="products" element={<Products />} />
        <Route path="facebook" element={<PostPage />} />
        <Route path="UserCard" element={<UserCard />} />
      </Routes>
    </>
  );
}

export default App;
