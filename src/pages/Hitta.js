import "./Hitta.css";

const GoogleMap = () => {
  return (
    <iframe
      className="hitta-map"
      title="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.2468848453036!2d18.05771387782379!3d59.31213431239631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77c28b90690d%3A0xd866414bdcce8b20!2sS%C3%B6dermalms%20Psykoterapimottagning!5e0!3m2!1ssv!2sse!4v1699099238508!5m2!1ssv!2sse"
      // width="600"
      // height="450"
      // style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

const Hitta = () => {
  return (
    <div className="hitta-container">
      <div className="hitta-instructions-and-map">
        <div className="hitta-instructions-container">
          <h1>Hitta hit</h1>
          <h2 className="hitta-adress">
            <b>Södermalms Psykoterapimottagning </b>
            <br />
            Lehusens gränd 2<br />
            118 65 Stockholm
          </h2>
          <p>Portkoder förmedlas vid bokning.</p>
          <p>
            10 minuters promenad från T-bana Medborgarplatsen eller Mariatorget.
            4 minuters promenad från Södra station pendeltågsstation. Där
            stannar också flera bussar: linje 3, 4, 55, 57 och 74.
          </p>
        </div>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Hitta;
