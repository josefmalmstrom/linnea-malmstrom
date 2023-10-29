import Button from "../components/Button";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>Sidan finns inte</h2> <body>Oj, nu verkar du ha hamnat fel.</body>
      <Button
        className="home-button"
        text="Tillbaka hem"
        onClick={(event) => {
          window.open("/", "_self");
        }}
      />
    </div>
  );
};

export default NotFound;
