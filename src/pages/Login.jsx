import "../styles/Login.css";

function Login() {
  return (
    <div className="mobile-container">

      <div className="Login-container">

        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <div className="input-group">

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter email address"
          />

        </div>

        <div className="input-group">

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
          />

        </div>

        <button className="login-button">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;