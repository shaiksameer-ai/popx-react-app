import Layout from "../components/Layout";
import "../styles/Profile.css";

function Profile() {
  return (
    <Layout>
      <div className="Profile-page">

        <div className="header">
          <h3>Account Settings</h3>
        </div>

        <div className="Profile-body">

          <div className="Profile-info">

            <div className="image-container">

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="Profile-image"
              />

              <div className="camera-icon">
                📷
              </div>

            </div>

            <div className="user-details">
              <h4>Marry Doe</h4>
              <p>Marry@gmail.com</p>
            </div>

          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam.
          </p>

        </div>

      </div>
    </Layout>
  );
}

export default Profile;