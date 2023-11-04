import knoppar from "../assets/images/knoppar.jpg";
import "./Kvalitet.css";

const Kvalitet = () => {
  return (
    <div className="kvalitet-container">
      <div className="kvalitet-text">
        <h1>Kvalitetssäkring</h1>
        <ul>
          <li>
            Medlem i Psykoterapicentrum, riksförening för legitimerade
            psykoterapeuter.
          </li>
          <li>
            Följer etiska riktlinjer för psykoterapeuter framtagna av
            Psykoterapicentrum.
          </li>
          <li>HBTQ-certifierad.</li>
          <li>
            Patientförsäkring och ansvarsförsäkring genom Akademikerförbundet
            SSR.
          </li>
          <li>
            Följer Socialstyrelsens riktlinjer om journalföring och
            kvalitetssäkring.
          </li>
          <li>
            Följer etiska riktlinjer för psykoterapihandledare framtagna av
            Psykoterapicentrum.
          </li>
          <li>
            Använder Ahums administrativa plattform för säker bokning, betalning
            och videosamtal.
          </li>
        </ul>
      </div>
      <img className="kvalitet-image" src={knoppar} alt="Växtknoppar"></img>
    </div>
  );
};

export default Kvalitet;
