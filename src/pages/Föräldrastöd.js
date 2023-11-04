import birds from "../assets/images/birds.jpg";
import "./Föräldrastöd.css";

const Föräldrastöd = () => {
  return (
    <div className="föräldrastöd-container">
      <h1>Föräldrastöd</h1>
      <div className="föräldrastöd-content">
        <div className="föräldrastöd-text">
          <p>
            Att bli förälder är kanske den mest omvälvande livsförändring vi
            ställs inför i livet. Samtidigt är det något helt naturligt som vi
            förväntas klara av och varken lämplighetsbedömning eller körkort
            krävs. Till hjälp har vi kärleken till barnet och den anknytning som
            uppstår mellan barnet och oss. Föräldraskapet finns sedan med oss
            igenom hela livet och förändras med barnets mognad och alla
            omständigheter som råder runt omkring relationen.
          </p>
          <p>
            Många känner behov av stöd i sitt föräldraskap, både när barnen är
            små men också senare i tonåren. Vi stöter på olika svårigheter
            beroende på erfarenheter som barn till våra egna föräldrar. Barn är
            också unika varelser med olika medfödda förutsättningar och därmed
            specifika behov av omhändertagande. Behoven förändras genom åren och
            ställer krav på föräldern att hänga med och möta barnet i olika
            faser. När barnet blivit ung vuxen upplever många föräldrar att
            mycket i både den unges liv och i relationen till föräldern liksom
            sätts på prov. Den unge vuxne ska nu skapa sig ett eget liv och
            förälderns uppgift är att finnas som stöd på ett sätt som fungerar
            och är konstruktivt.
          </p>
          <p>
            Jag tar emot föräldrar till barn i olika åldrar i stödsamtal kring
            föräldraskapet. Till min hjälp har jag bland annat ett
            föräldraprogram som heter Trygghetscirkeln och som fokuserar på att
            stärka föräldrar att ta fram sina unika färdigheter och matcha dem
            med sitt barns behov, oavsett ålder.
          </p>
          <p>Ett stödsamtal varar i 45 minuter. Kostnad: 1 100 kr.</p>
        </div>
        <img
          className="föräldrastöd-image"
          src={birds}
          alt="Fågel som matar sina ungar."
        ></img>
      </div>
    </div>
  );
};

export default Föräldrastöd;
