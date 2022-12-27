import "bootstrap/dist/css/bootstrap.min.css";
import "./Component/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Addstudent from "./Component/Addstudent";

import Student from "./Component/Student";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
