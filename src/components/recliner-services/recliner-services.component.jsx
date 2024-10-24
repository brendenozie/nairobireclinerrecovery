
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./recliner-services.styles.scss";

import WhatsAppCTA from "../whatsapp-call-action/WhatsAppCTA.component";

const ReclinerServices = () => {
  return (
    <div className="recliner-services">
      <header className="recheader">
        <h1>Don't throw your used recliners or imported sofas away!</h1>
        <p>let us transform them for you and make them more comfortable than you bought them.</p>
      </header>
      
      <section className="services">
        <h2>Our Services</h2>
        <ul className="service-list">
          <li>🛋️ Washing and Refilling</li>
          <li>🛠️ Refurbishing</li>
          <li>🪑 Refilling Only</li>
          <li>🎨 Cover Changing and Refilling</li>
          <li>🔧 Sofa Servicing and Mechanism Maintenance</li>
        </ul>
      </section>

      <section className="about">
        <h2>Convenient, On-Site Service</h2>
        <p>We are mobile and work in the comfort of your premises, anywhere in the country.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>📞 Call us on: <strong>0799 571567</strong></p>
      </section>

      {/* <footer className="recfooter"> */}
        <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
      {/* </footer> */}
    </div>
  );
};

export default ReclinerServices;
