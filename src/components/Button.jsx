import "./../styles/common.css";

function Button({ text, type = "button", className = "", onClick }) {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;