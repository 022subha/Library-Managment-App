import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home.js";
import "./App.css";
function App() {
  const [admin, setAdmin] = useState();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
