import React, { useEffect } from "react";
import "./homepage.scss";
import Hero from "../components/hero/hero.component";
import LazyVideo from "../components/lazy-video/LazyVideo.component";
import { imgAbout1, imgAbout2, imgEthos1, imgEthos2 } from "../assets/assets";
import CollectionPreview from "../components/collections-preview/collections-preview.component";
import SideBySideImages from "../components/image-compare/SideBySideImages.component";
import WhatsAppCTA from "../components/whatsapp-call-action/WhatsAppCTA.component";
import BeforeAfterSlider from "../components/BeforeAfterSliderr/BeforeAfterSliderr.component";
import { toggleModalHidden } from "../redux/product-modal/product-modal.actions";
import { ScrollTriggerAnimations } from "../js/animations";
import { connect } from "react-redux";
import BeforeImage1 from "../assets/img/1br.jpeg";
import AfterImage2 from "../assets/img/2br.jpeg";
import BeforeImage5 from "../assets/img/5br.jpeg";
import AfterImage6 from "../assets/img/6br.jpeg";
import BeforeImage7 from "../assets/img/7br.jpeg";
import AfterImage8 from "../assets/img/8br.jpeg";
import BeforeImage9 from "../assets/img/9br.jpeg";
import AfterImage10 from "../assets/img/10br.jpeg";
import BeforeImage11 from "../assets/img/11br.jpeg";
import AfterImage12 from "../assets/img/12br.jpeg";
import BeforeImage13 from "../assets/img/13br.jpeg";
import AfterImage14 from "../assets/img/14br.jpeg";
import BeforeImage15 from "../assets/img/15br.jpeg";
import AfterImage16 from "../assets/img/16br.jpeg";

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
        <p className="title">How We Do IT</p>
        <h2 className="title__sub">
          <span>Watch</span> transform into quality
        </h2>
        <LazyVideo poster={BeforeImage1} alt="Exercise Video" />
      </section>
      

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

      <SideBySideImages
        img1={BeforeImage1}
        img2={AfterImage2}
        alt1="Before Image"
        alt2="After Image"
        description="This is a comparison between the two images."
        img1Attributes={{ loading: 'lazy', className: 'img-fluid', alt: 'Before Image' }}  // Adding lazy loading and custom attributes
        img2Attributes={{ loading: 'lazy', className: 'img-fluid', alt: 'After Image' }}
      />

      <section className="section__ethos anim-content">
        <div className="ethos__content">
          <div className="ethos__content--img img">
            <img
              src={imgEthos1}
              alt="Our Ethos"
              className="img-1"
              loading="lazy"
            />

            <div className="img-2__banner">
              <img
                src={imgEthos2}
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
        beforeImage={BeforeImage1}
        afterImage={AfterImage2}
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

      <SideBySideImages 
            img1={BeforeImage15}
              img2={AfterImage16}
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
            img1={BeforeImage5}
              img2={AfterImage6}
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
      
        
        <BeforeAfterSlider 
        beforeImage={BeforeImage7}
        afterImage={AfterImage8}
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

       <SideBySideImages 
                img1={BeforeImage7}
                  img2={AfterImage8}
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
                img1={BeforeImage9}
                  img2={AfterImage10}
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
                img1={BeforeImage11}
                  img2={AfterImage12}
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
                img1={BeforeImage13}
                  img2={AfterImage14}
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
                img1={BeforeImage15}
                  img2={AfterImage16}
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







