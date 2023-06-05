import Navbar from "./components/views/Navbar";

import "./App.css";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Projects from "./components/views/Projects";
import Technology from "./components/views/Tecnology";
import Contact from "./components/views/Contact";
import Footer from "./components/views/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
