import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <NavBar />
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
      <Route path="sociallinks" element={<SocialLinks />} />
      </Routes>
    </div>
  );
}

export default App;
