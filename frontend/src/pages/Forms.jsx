import React, {useEffect} from "react";

const FormDetails = () => {
        useEffect(() => {
            document.title = 'Forms'
        }, []);
  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">FORM DETAILS</div>
        <div className="form-content">
          <p>Please find below the downloadable forms related to our services. Each form contains essential information for customers.</p>
          <ul className="form-list">
            <li className="form-item">
              <div className="form-info">
                <strong>FAQ Document</strong>
                <p>Common questions and answers regarding our dealership, services, financing, and more.</p>
              </div>
              <a
                href="/files/FAQ.docx"
                download
                className="download-button"
              >
                <button>Download FAQ</button>
              </a>
            </li>

            <li className="form-item">
              <div className="form-info">
                <strong>Warranty & Insurance Info</strong>
                <p>Detailed warranty coverage and insurance options for your vehicle.</p>
              </div>
              <a
                href="/files/Warranty.docx"
                download
                className="download-button"
              >
                <button>Download Warranty Info</button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="email-section">
        <p>
          <a href="mailto:vladkolmorgan@my.cwi.edu">
            <i className="fa-solid fa-envelope me-2"></i> Email Forms
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormDetails;