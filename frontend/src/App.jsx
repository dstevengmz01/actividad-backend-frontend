import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usuarios from "./Usuarios";
import Detalles from "./Detalles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="/Detalles" element={<Detalles />} />
      </Routes>
    </Router>
  );
}

export default App;
