import "./App.css";
import Contact from "./components/moleculas/Contact";
import Footer from "./components/moleculas/Footer";
import Navbar from "./components/moleculas/Navbar";
import Rating from "./components/moleculas/Rating";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Rating />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
