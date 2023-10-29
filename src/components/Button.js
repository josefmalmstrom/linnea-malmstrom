import "./Button.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <div className="button-content">
        {text} {icon}
      </div>
    </button>
  );
};

export default Button;
