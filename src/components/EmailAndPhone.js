import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";
import "./EmailAndPhone.css";

const EmailAndPhone = () => {
  return (
    <div className="email-phone-container">
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
  );
};

export default EmailAndPhone;
