import "./Footer.css";
import Button from "./Button";
import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import { ReactComponent as ExternalLinkIcon } from "../assets/icons/external-link.svg";

const Footer = () => {
  return (
    <footer>
      <div className="copyright-notice">
        Copyright © 2023 Linnea Malmström, psykoterapi och handledning
      </div>
      <div className="contact">
        <div className="email">
          <EmailIcon />
          <a href="mailto:kontakt@linneamalmstrom.se">
            kontakt@linneamalmstrom.se
          </a>
        </div>
        <div className="phone">
          <PhoneIcon />
          <div className="phone-number">073-963 56 77</div>
        </div>
      </div>
      <div className="booking-button">
        <Button
          text="Boka tid"
          icon=<ExternalLinkIcon className="link-icon" />
          onClick={(event) => {
            window.open("https://ahum.se/t/linnea-malmstrom-667", "_blank");
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
