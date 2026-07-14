import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import "../styles/Welcome.css";

function Welcome() {
  return (
    <Layout>
      <div className="Welcome-page">

        <div className="Welcome-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <Link to="/register">
            <Button
              text="Create Account"
              className="primary"
            />
          </Link>

          <Link to="/login">
            <Button
              text="Already Registered? Login"
              className="secondary"
            />
          </Link>

        </div>

      </div>
    </Layout>
  );
}

export default Welcome;