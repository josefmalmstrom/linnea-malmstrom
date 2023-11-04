import sprouts from "../assets/images/sprouts.jpg";

import "./Handledning.css";

const Handledning = () => {
  return (
    <div className="handledning-container">
      <h1>Handledning</h1>
      <div className="handledning-content">
        <div className="handledning-text">
          <p>
            Handledning syftar ofta till att på olika sätt stärka individen i
            sin yrkesroll så att det gynnar den målgrupp som står i fokus för
            arbetet.
          </p>
          <p>
            I en fungerande handledning skapas en plats för reflektion där
            deltagarna får möjlighet att tänka kring sig själva i sitt arbete.
            En viktig förutsättning för att handledning ska vara verksam är
            upplevelsen av trygghet. Det är handledarens uppgift att utifrån
            givna förutsättningar skapa en ram och en struktur för handledningen
            som gynnar ett tryggt klimat där det går att tänka kreativt.
          </p>
          <p>
            Jag erbjuder handledning för personal som arbetar med människor inom
            vård och omsorg, exempelvis HVB, ungdomsmottagning, vuxenpsykiatrin,
            hjälporganisationer och kvinnojour. Jag arbetar med
            psykoterapihandledning och verksamhetshandledning, både i mindre
            grupper och individuellt.
          </p>
          <p>
            Välkommen att kontakta mig för konsultation kring upplägg och
            kostnadsförslag.
          </p>
        </div>
        <img className="handledning-image" src={sprouts} alt="Växter"></img>
      </div>
    </div>
  );
};

export default Handledning;
