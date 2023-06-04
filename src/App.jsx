import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
