import React, {useEffect} from "react";
import { InitPreviewAnimation } from "../../js/animations";

import "./WhatsAppCTA.styles.scss";
import { Link } from "react-router-dom";
import {
  imgChair,
  imgSofa,
  imgOtto,
} from "../../assets/assets";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";
 

const WhatsAppCTA = ({ phoneNumber, message }) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <div className="whatsapp-cta">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Logo"
        />
        Chat with us on WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppCTA;

