
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./components/Inicio";
import Publicaciones from "./components/Publicaciones"
import Notificaciones from "./components/Notificaciones";
import Grupos from "./components/Grupos";
import NoPage from "./components/NoPage"

 function Principal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="publicaciones" element={<Publicaciones />} />
          <Route path="Notificaciones" element={<Notificaciones />} />
          <Route path="grupos" element={<Grupos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Principal;