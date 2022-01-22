import ProductGrid from "./components/ProductGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<ProductGrid/>}/>
        <Route path = "/productDetail/:id" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
