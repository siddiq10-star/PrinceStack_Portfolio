import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects"; // ✅ Import this

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
