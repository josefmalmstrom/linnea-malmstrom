import image from "../assets/images/greenery_light.jpg";
import "./Psykoterapi.css";

const Psykoterapi = () => {
  return (
    <div className="psykoterapi-container">
      <h1 className="psykoterapi-title">Psykoterapi</h1>
      <div className="psykoterapi-content">
        <div className="psykoterapi-text">
          <p>
            Skälen till att söka psykoterapi är många och kan yttra sig på lite
            olika sätt. Ibland finns ett behov hos oss människor av att sortera
            och förstå det som pågår i vår inre värld. En utomstående
            samtalspartner ger nya perspektiv och möjlighet till reflektion.
            Livet bjuder på oförutsedda händelser och vi kan hamna i livskriser
            av olika slag. Många söker terapi för symptom såsom ångest, trötthet
            och nedstämdhet samt fysiska besvär som går att koppla samman med
            stress och inre obalans. Genom att komma i kontakt med våra känslor
            och lära oss att använda dem konstruktivt, kan vi minska ångest samt
            öka självkänsla och välbefinnande.
          </p>
          <p>
            Relationsproblem av olika slag är ett område som ofta hamnar i fokus
            i samtal. Jag tänker att vi lever i en paradox där vi människor i
            grunden är flockdjur och emotionellt beroende av varandra, samtidigt
            som vi strävar mot självständighet och oberoende. Fokus för samtalen
            utgår ofta från nuet men genom att se tillbaka i historien kan
            relationsmönster bli tydliga och vi kan välja nya sätt att relatera
            till andra.
          </p>
          <p>
            Tillsammans avgör vi hur lång en terapi behöver vara för att den ska
            vara till hjälp, likaså frekvensen för samtalen.
          </p>
          <p>Ett samtal varar i 45 minuter. Kostnad: 1 100 kr.</p>

          <h2>Mer om mitt förhållningssätt</h2>
          <ul>
            <li>
              <a href="https://www.ahum.se/bloggen/psykoterapi-ett-fredsarbete/">
                "Psykoterapi - ett fredsarbete" - artikel på Ahums blogg
              </a>
            </li>
            <li>
              <a href="https://www.mellanrummet.net/nr37-2019/samtal-pa-egna-villkor.pdf">
                "Samtal på egna villkor" - artikel i tidskriften Mellanrummet
              </a>
            </li>
          </ul>
        </div>
        <img className="psykoterapi-image" src={image} alt="Grönska"></img>
      </div>
    </div>
  );
};

export default Psykoterapi;
