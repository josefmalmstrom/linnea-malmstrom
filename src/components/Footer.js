import EmailAndPhone from "./EmailAndPhone";
import BookingButton from "./BookingButton";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copyright-notice">
        Copyright © 2023 Linnea Malmström, psykoterapi och handledning
      </div>
      <EmailAndPhone />
      <BookingButton />
    </footer>
  );
};

export default Footer;
