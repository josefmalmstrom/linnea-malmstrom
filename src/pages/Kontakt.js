import BookingButton from "../components/BookingButton";
import EmailAndPhone from "../components/EmailAndPhone";
import "./Kontakt.css";

const Kontakt = () => {
  return (
    <div className="kontakt-container">
      <h1>Kontakt</h1>
      <div className="kontakt-text">
        <p>
          Jag tar emot besök på Södermalms psykoterapimottagning på Lehusens
          gränd 2, Södermalm.
        </p>
        <p>
          Jag är ansluten till Ahum som är en administrativ plattform för
          psykoterapi. Genom Ahum sker bokning och betalning på ett säkert sätt.
          Du kan själv boka samtal via ”Boka tid” nedan. Besök undanbedes vid
          symtom på sjukdom/förkylning. Vid behov erbjuder jag samtal online via
          Ahums videotjänst.
        </p>
        <p>
          Vill du komma i kontakt med mig går det bra att mejla på nedanstående
          adress. Jag sitter ofta i samtal men vill du ringa så går det också
          bra, lämna då ett meddelande så ringer jag upp.
        </p>
      </div>
      <div className="kontakt-contact-components">
        <BookingButton />
        <EmailAndPhone />
      </div>
    </div>
  );
};

export default Kontakt;
