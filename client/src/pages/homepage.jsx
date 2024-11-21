import React, { useEffect } from "react";
import "./homepage.scss";
import Hero from "../components/hero/hero.component";
import LazyVideo from "../components/lazy-video/LazyVideo.component";
import { imgAbout1, imgAbout2 } from "../assets/assets";
import CollectionPreview from "../components/collections-preview/collections-preview.component";
import ReclinerServices from "../components/recliner-services/recliner-services.component";
import SideBySideImages from "../components/image-compare/SideBySideImages.component";
import WhatsAppCTA from "../components/whatsapp-call-action/WhatsAppCTA.component";
import BeforeAfterSlider from "../components/BeforeAfterSliderr/BeforeAfterSliderr.component";
import { toggleModalHidden } from "../redux/product-modal/product-modal.actions";
import { ScrollTriggerAnimations } from "../js/animations";
import { connect } from "react-redux";

import whoweare1 from "../assets/img/whoweare1.jpeg";

import watchus1 from "../assets/img/watchus1.jpeg";
import watchus2 from "../assets/img/watchus2.jpeg";
import WashingRefilling1 from "../assets/img/WashingRefilling1.jpeg";
import WashingRefilling2 from "../assets/img/WashingRefilling2.jpeg";
import Effortlessly1 from "../assets/img/Effortlessly1.jpg";
import Effortlessly2 from "../assets/img/Effortlessly2.jpg";
import sidebyside1 from "../assets/img/sidebyside1.jpeg";
import sidebyside2 from "../assets/img/sidebyside2.jpeg";
import Refurbishing1 from "../assets/img/Refurbishing1.jpeg";
import Refurbishing2 from "../assets/img/Refurbishing2.jpeg";
import RefillingOnly1 from "../assets/img/RefillingOnly1.jpeg";
import RefillingOnly2 from "../assets/img/RefillingOnly2.jpeg";
import CoverChanging1 from "../assets/img/CoverChanging1.jpeg";
import CoverChanging2 from "../assets/img/CoverChanging2.jpeg";
import sidebyside21 from "../assets/img/sidebyside21.jpeg";
import sidebyside22 from "../assets/img/sidebyside22.jpeg";
import SofaServicing1 from "../assets/img/SofaServicing1.jpeg";
import SofaServicing2 from "../assets/img/SofaServicing2.jpeg";
import SofaServicing31 from "../assets/img/SofaServicing31.jpeg";
import SofaServicing32 from "../assets/img/SofaServicing32.jpeg";
import SofaServicing41 from "../assets/img/SofaServicing41.jpeg";
import SofaServicing42 from "../assets/img/SofaServicing42.jpeg";
import SofaServicing51 from "../assets/img/SofaServicing51.jpeg";
import SofaServicing52 from "../assets/img/SofaServicing52.jpeg";

// import BeforeImage1 from "../assets/img/Banner1.jpeg";
// import AfterImage2 from "../assets/img/Banner2.jpeg";
// import BeforeImage5 from "../assets/img/5br.jpeg";
// import AfterImage6 from "../assets/img/6br.jpeg";
// import BeforeImage7 from "../assets/img/7br.jpeg";
// import AfterImage8 from "../assets/img/8br.jpeg";
// import BeforeImage9 from "../assets/img/9br.jpeg";
// import AfterImage10 from "../assets/img/10br.jpeg";
// import BeforeImage11 from "../assets/img/11br.jpeg";
// import AfterImage12 from "../assets/img/12br.jpeg";
// import BeforeImage13 from "../assets/img/13br.jpeg";
// import AfterImage14 from "../assets/img/14br.jpeg";
// import BeforeImage15 from "../assets/img/15br.jpeg";
// import AfterImage16 from "../assets/img/16br.jpeg";

const HomePage = ({ setModalHidden }) => {
  useEffect(() => {
    ScrollTriggerAnimations();
    setModalHidden(true);
  }, [setModalHidden]);

  return (
    <React.Fragment>
      <Hero />

      <section className="section__about anim-content">
        <div className="about__content">
          <div className="about__content--text">
            <p className="title">Who We Are</p>
            <h2 className="title__sub">
              <span>Recliner</span> Restoration And Recovery
            </h2>
            <p className="paragraph">
              We are a collaboration of emerging and iconic designers and
              makers. Each object was designed to bring quality and style to
              your everyday rituals.
            </p>
          </div>

          <div className="about__content--img img">
            <img
              src={imgAbout1}
              alt="About Us"
              className="img-1"
              loading="lazy"  // Lazy load this image
            />

            <div className="img-2__banner">
              <img
                src={imgAbout2}
                alt="About Us Banner"
                className="img-2"
                loading="lazy"  // Lazy load this image
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section__newsletter">
        <p className="title">Don't throw your used sofas away</p>
        <h2 className="title__sub">
          <span>Watch</span> us transform them for you
        </h2>
        <LazyVideo poster={watchus1} alt="Exercise Video" />
      </section>
      
      <ReclinerServices />


      <CollectionPreview />

      <section className="section__newsletter">
        <p className="title">Contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form className="newsletter__form">
          <WhatsAppCTA
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>

      <section id="washing-and-refilling">
        <SideBySideImages
          id="washing-and-refilling"
          img1={WashingRefilling1}
          img2={WashingRefilling2}
          alt1="Before Image"
          alt2="After Image"
          description="This is a comparison between the two images."
          img1Attributes={{ loading: 'lazy', className: 'img-fluid', alt: 'Before Image' }}  // Adding lazy loading and custom attributes
          img2Attributes={{ loading: 'lazy', className: 'img-fluid', alt: 'After Image' }}
        />
      </section>

      <section className="section__ethos anim-content">
        <div className="ethos__content">
          <div className="ethos__content--img img">
            <img
              src={Effortlessly1}
              alt="Our Ethos"
              className="img-1"
              loading="lazy"
            />

            <div className="img-2__banner">
              <img
                src={Effortlessly2}
                alt="Ethos Banner"
                className="img-2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="ethos__content--text">
            <p className="title">Our Ethos</p>
            <h2 className="title__sub">
              <span>Effortlessly</span> Grande Homes
            </h2>
            <p className="paragraph">
              Making luxurious and truly grande furniture accessible for all
              people is our daily drive.
            </p>
          </div>
        </div>
      </section>

      <BeforeAfterSlider
        beforeImage={sidebyside1}
        afterImage={sidebyside2}
        beforeAlt="Before Transformation"
        afterAlt="After Transformation"
      />

      <section className="section__newsletter">
        <p className="title">Contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form className="newsletter__form">
          <WhatsAppCTA
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>

      <section id="refurbishing">
        <SideBySideImages id="refurbishing"
            img1={Refurbishing1}
              img2={Refurbishing2}
              alt1="First Image"
              alt2="Second Image"
              description="This is a comparison between the two images."
              />
        </section>

      <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>
      
      <section id="refilling-only">
        <SideBySideImages  id="refilling-only"
            img1={RefillingOnly1}
              img2={RefillingOnly2}
              alt1="First Image"
              alt2="Second Image"
              description="This is a comparison between the two images."
              />
      </section>

      <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>
      
      
        <BeforeAfterSlider 
          beforeImage={sidebyside21}
          afterImage={sidebyside22}
          beforeAlt="Before Transformation"
          afterAlt="After Transformation"
        />

      <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>

      <section id="cover-changing">
       <SideBySideImages  id="cover-changing"
                img1={CoverChanging1}
                  img2={CoverChanging2}
                  alt1="First Image"
                  alt2="Second Image"
                  description="This is a comparison between the two images."
                  />
      </section>

      <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>

      <section id="sofa-servicing">
       <SideBySideImages id="sofa-servicing"
                img1={SofaServicing1}
                  img2={SofaServicing2}
                  alt1="First Image"
                  alt2="Second Image"
                  description="This is a comparison between the two images."
                  />
      </section>

        <section className="section__newsletter">
          <p className="title">contact</p>
          <h2 className="title__sub">
            <span>Reach Out</span> on Whatsapp
          </h2>
          <form action="" className="newsletter__form">
            <WhatsAppCTA 
              phoneNumber="+254799571567"
              message="Hello, I would like to inquire about your services."
            />
          </form>
        </section>
        
       <SideBySideImages 
                img1={SofaServicing31}
                  img2={SofaServicing32}
                  alt1="First Image"
                  alt2="Second Image"
                  description="This is a comparison between the two images."
                  />

        <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>

        
       <SideBySideImages 
                img1={SofaServicing41}
                  img2={SofaServicing42}
                  alt1="First Image"
                  alt2="Second Image"
                  description="This is a comparison between the two images."
                  />

        <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>

         <SideBySideImages 
                img1={SofaServicing51}
                  img2={SofaServicing52}
                  alt1="First Image"
                  alt2="Second Image"
                  description="This is a comparison between the two images."
                  />

        <section className="section__newsletter">
        <p className="title">contact</p>
        <h2 className="title__sub">
          <span>Reach Out</span> on Whatsapp
        </h2>
        <form action="" className="newsletter__form">
          <WhatsAppCTA 
            phoneNumber="+254799571567"
            message="Hello, I would like to inquire about your services."
          />
        </form>
      </section>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setModalHidden: (value) => dispatch(toggleModalHidden(value)),
});

export default connect(null, mapDispatchToProps)(HomePage);







