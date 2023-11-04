import Button from "./Button.js";
import { ReactComponent as ExternalLinkIcon } from "../assets/icons/external-link.svg";
import "./BookingButton.css";

const BookingButton = () => {
  return (
    <div className="booking-button-container">
      <Button
        text="Boka tid"
        icon=<ExternalLinkIcon className="booking-button-link-icon" />
        onClick={(event) => {
          window.open("https://ahum.se/t/linnea-malmstrom-667", "_blank");
        }}
      />
    </div>
  );
};

export default BookingButton;
