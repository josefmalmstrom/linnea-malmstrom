import coverPhoto from "../assets/images/linnea_malmstrom.jpg";
import "./Hem.css";

const Hem = () => {
  return (
    <div className="home-container">
      <div className="home-title-container">
        <h2 className="home-job-title">
          Legitimerad psykoterapeut och handledare
        </h2>
        <h1 className="home-name">Linnea Malmström</h1>
      </div>
      <img
        className="cover-photo"
        src={coverPhoto}
        alt="Linnea Malmström"
      ></img>
      <div>
        <p>
          För mig är psykoterapi ett fredsarbete. I samtal ges du möjlighet att
          på olika sätt utforska din personlighet och förstå dig själv bättre.
          Många faktorer påverkar vem du är idag och hur du ser på dig själv.
          Med ökad förståelse för just din historia och dina förutsättningar kan
          du lära dig att värna om dig själv och ta vara på din potential. I
          relationer blir det då lättare att uttrycka dina behov och sätta
          gränser på ett konstruktivt sätt.
        </p>
        <p>
          Tillvaron ställer höga krav på oss människor idag och många lider av
          symtom på psykisk ohälsa av olika slag. Genom samtal kan du hitta sätt
          att bättre ta hand om dina behov och känslor. Ofta leder en
          psykoterapi till förändringar som skapar balans i ditt inre och gör
          det lättare att fatta beslut i vardagen som påverkar ditt mående och
          hur du lever ditt liv.
        </p>
        <p>
          Jag är legitimerad psykoterapeut, utbildad vid Ersta Sköndal högskola,
          med en fil kand i psykologi/personalvetare som grundutbildning. Det
          psykodynamiska synsättet är min utgångspunkt. Under åren har jag
          vidareutbildat mig i KBT, affektfokuserad psykoterapi och
          compassionfokuserad psykoterapi. Jag arbetar integrativt och använder
          de metoder och arbetssätt som jag tror kan vara till hjälp för den
          människa jag möter. Mitt förhållningsätt i samtalen är relationellt
          vilket betyder att vi tillsammans utforskar den förändringsprocess som
          psykoterapin skapar och tar vara på vårt samspel som en del av detta.
        </p>
        <p>
          Jag är utbildad handledare vid Ericastiftelsen och arbetar med
          psykoterapihandledning och verksamhetshandledning.
        </p>
        <p>I offer psychotherapy in English.</p>
      </div>
    </div>
  );
};

export default Hem;
