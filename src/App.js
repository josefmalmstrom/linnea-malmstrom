import { HashRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Hem from "./pages/Hem";
import Psykoterapi from "./pages/Psykoterapi";
import Föräldrastöd from "./pages/Föräldrastöd";
import Handledning from "./pages/Handledning";
import Kvalitet from "./pages/Kvalitet";
import Kontakt from "./pages/Kontakt";
import Hitta from "./pages/Hitta";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/psykoterapi" element={<Psykoterapi />} />
        {["/föräldrastöd", "/foraldrastod"].map((path) => (
          <Route path={path} element={<Föräldrastöd />}></Route>
        ))}
        <Route path="/handledning" element={<Handledning />} />
        {["/kvalitetssäkring", "/kvalitetssakring"].map((path) => (
          <Route path={path} element={<Kvalitet />}></Route>
        ))}
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/hitta" element={<Hitta />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
