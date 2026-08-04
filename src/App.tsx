import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Carrinho from "./pages/Carrinho";
import Categorias from "./pages/Categorias";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}