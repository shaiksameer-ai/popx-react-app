import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    navigate("/profile");
  };

  return (
    <Layout>
      <div className="Register-page">

        <h1>
          Create your <br /> PopX account
        </h1>

        <InputField
          label="Full Name"
          required
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <InputField
          label="Phone number"
          required
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <InputField
          label="Email address"
          required
          placeholder="Enter email address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <InputField
          label="Password"
          required
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <InputField
          label="Company name"
          placeholder="Enter company name"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <div className="agency-section">
          <label className="agency-label">
            Are you an Agency?<span className="required">*</span>
          </label>

          <div className="radio-group">

            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                checked={formData.agency === "yes"}
                onChange={() => handleChange("agency", "yes")}
              />
              Yes
            </label>

            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                checked={formData.agency === "no"}
                onChange={() => handleChange("agency", "no")}
              />
              No
            </label>

          </div>
        </div>

        <div className="Register-btn">
          <Button
            text="Create Account"
            className="primary"
            onClick={handleSubmit}
          />
        </div>

      </div>
    </Layout>
  );
}

export default Register;