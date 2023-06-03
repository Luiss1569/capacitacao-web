import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
