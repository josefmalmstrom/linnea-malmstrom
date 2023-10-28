import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hem from "./pages/Hem";
import Psykoterapi from "./pages/Psykoterapi";
import Föräldrastöd from "./pages/Föräldrastöd";
import Handledning from "./pages/Handledning";
import Kvalitet from "./pages/Kvalitet";
import Kontakt from "./pages/Kontakt";
import Hitta from "./pages/Hitta";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Hem />} />
        <Route exact path="/psykoterapi" element={<Psykoterapi />} />
        {["/föräldrastöd", "/foraldrastod"].map((path) => (
          <Route exact path={path} element={<Föräldrastöd />}></Route>
        ))}
        <Route exact path="/handledning" element={<Handledning />} />
        {["/kvalitetssäkring", "/kvalitetssakring"].map((path) => (
          <Route exact path={path} element={<Kvalitet />}></Route>
        ))}
        <Route exact path="/kontakt" element={<Kontakt />} />
        <Route exact path="/hitta" element={<Hitta />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
