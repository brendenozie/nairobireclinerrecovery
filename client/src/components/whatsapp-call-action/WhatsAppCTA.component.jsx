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
  const facebookLink = `https://web.facebook.com/p/Nairobi-Recliners-recovery-and-repairs-100064750723895/?_rdc=1&_rdr`;
  const instagramLink = `https://www.instagram.com/recliners_repairs_ke/`;

  return (
    <>
    <div className="whatsapp-cta">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp Logo"
        />
        Chat with us on WhatsApp
      </a>
    </div>
    
    <div className="whatsapp-cta">
      <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="cta-button"   style={{backgroundColor : "#6575f1"}}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" 
          alt="Facebook Logo"
        />
        Check us out on Facebook
      </a>
    </div>
    
    <div className="whatsapp-cta">
      <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="cta-button"  style={{backgroundColor : "#ee0f95"}}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
          alt="Instagram Logo"
        />
        Chat us out on Instagram
      </a>
    </div>
    </>
  );
};

export default WhatsAppCTA;

