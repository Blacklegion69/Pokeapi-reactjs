import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Pokemonslist from "@/pages/Pokemonslist";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons/:id" element={<Pokemonslist />} />
      <Route path="*" element={<div>404 not found</div>} />
    </Routes>
  );
};

export default Routers;
