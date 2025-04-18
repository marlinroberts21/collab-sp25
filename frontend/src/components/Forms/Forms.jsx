import React, { useState } from "react";

const FormDetails = () => {
  const [email, setEmail] = useState("");

  const handleEmailSend = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent("Car Dealership Form Details");
    const body = encodeURIComponent(
      "Attached is the form with the frequently asked questions.\n\nThanks!"
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">FORM DETAILS</div>
        <div className="form-content">
          <p>This is where the form details will be displayed.</p>
        </div>
      </div>

      {/* Link to download the form file */}
      <a
        href="./FAQ.docx"
        download
        className="download-button"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "20px",
        }}>
        <button>DOWNLOAD FAQ</button>
      </a>
      <a
        href="./Warranty.docx"
        download
        className="download-button"
        style={{
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "20px",
        }}>
        <button>DOWNLOAD Warranty Information</button>
      </a>

      <div className="email-section">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button onClick={handleEmailSend} className="email-button">
          Email Form
        </button>
      </div>
    </div>
  );
};

export default FormDetails;
