import Navbar from "./components/views/Navbar";

import "./App.css";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Projects from "./components/views/Projects";
import Technology from "./components/views/Tecnology";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technology />
    </div>
  );
}

export default App;
