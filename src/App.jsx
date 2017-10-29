import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/AboutPage.jsx";
import GalleryPage from "./pages/Gallery/GalleryPage.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Students from "./pages/Students/Students.jsx";
import Teachers from "./pages/Teachers/Teachers.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Login from "./pages/Login/Login.jsx";
import Header from "./pages/Header/Header.jsx";
import SplashCursor from "./SmokeAnimation/SmokeEffect.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <SplashCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
