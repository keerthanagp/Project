import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import "./Style.css"
import Signup from "./Routes/Signup";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignUp" element={<Signup/>} />
      </Routes>
      <Navbar />
    </div>
  );
}