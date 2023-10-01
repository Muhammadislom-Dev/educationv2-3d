import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/moleculas/Footer";
import Navbar from "./components/moleculas/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./components/moleculas/Category";
import CategoryAbout from "./pages/CategoryAbout/CategoryAbout";

function App() {
  const token = useSelector((state) => state.auth.token);
  return (
    <div className="App">
      <Navbar />
      {token ? (
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category" element={<CategoryAbout />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
