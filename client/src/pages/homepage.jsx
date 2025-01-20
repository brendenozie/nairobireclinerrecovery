import React, { useEffect } from "react";
import "./homepage.scss";
import Hero from "../components/hero/hero.component";
import LazyVideo from "../components/lazy-video/LazyVideo.component";
import CollectionPreview from "../components/collections-preview/collections-preview.component";
import ReclinerServices from "../components/recliner-services/recliner-services.component";
import SideBySideImages from "../components/image-compare/SideBySideImages.component";
import WhatsAppCTA from "../components/whatsapp-call-action/WhatsAppCTA.component";
import BeforeAfterSlider from "../components/BeforeAfterSliderr/BeforeAfterSliderr.component";
import { toggleModalHidden } from "../redux/product-modal/product-modal.actions";
import { ScrollTriggerAnimations } from "../js/animations";
import { connect } from "react-redux";


const imageSections = {
  banner: [
    {
      name: "Banner 1",
      fileName: "kaqk8ftwuynfnpgpy7ae.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734543363/kaqk8ftwuynfnpgpy7ae.jpg",
    },
    {
      name: "Banner 2",
      fileName: "gg53pmnpe8j8ctmrtc9f.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734543363/gg53pmnpe8j8ctmrtc9f.jpg",
    },
  ],
  whoweare: [
    {
      name: "Who We 1",
      fileName: "fkwzlingxdhhwncvs18k.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734542805/fkwzlingxdhhwncvs18k.jpg",
    },
    {
      name: "Who We 2",
      fileName: "eba3a3kc8tdbikph5erp.jpg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734542804/eba3a3kc8tdbikph5erp.jpg",
    },
  ],
  watchus: [
    {
      name: "Watch us 1",
      fileName: "watchus1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534077/watchus1_l5ei4d.jpg",
    },
    {
      name: "Watch us 2",
      fileName: "watchus2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534078/watchus2_wkasyw.jpg",
    },
  ],
  washingrefilling: [
    {
      name: "Washing Refilling 1",
      fileName: "washingrefilling1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534129/WashingRefilling1_sywwgj.jpg",
    },
    {
      name: "Washing Refilling 2",
      fileName: "washingrefilling2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534128/WashingRefilling2_cx43mc.jpg",
    },
  ],
  Effortlessly: [
    {
      name: "Effortlessly 1",
      fileName: "Effortlessly1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534205/Effortlessly1_putnfk.jpg",
    },
    {
      name: "Effortlessly 2",
      fileName: "Effortlessly2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534206/Effortlessly2_ptnh6x.jpg",
    },
  ],
  sidebyside: [
    {
      name: "Side 1",
      fileName: "sidebyside1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534248/sidebyside1_ikkezl.jpg",
    },
    {
      name: "Side 2",
      fileName: "sidebyside2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534249/sidebyside2_bhcmrk.jpg",
    },
  ],
  refurbishing: [
    {
      name: "Refurbishing 1",
      fileName: "refurbishing1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534310/Refurbishing1_memhgo.jpg",
    },
    {
      name: "Refurbishing 2",
      fileName: "refurbishing2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534312/Refurbishing2_cwqwcf.jpg",
    },
  ],
  refillingonly: [
    {
      name: "Refilling Only 1",
      fileName: "RefillingOnly1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534351/RefillingOnly1_ejs1l4.jpg",
    },
    {
      name: "Refilling Only 2",
      fileName: "RefillingOnly2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534353/RefillingOnly2_w0rviw.jpg",
    },
  ],
  coverchangingrefilling: [
    {
      name: "Cover Changing 1",
      fileName: "CoverChanging1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534394/CoverChanging1_v22j1u.jpg",
    },
    {
      name: "Cover Changing 2",
      fileName: "CoverChanging2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534392/CoverChanging2_imhidk.jpg",
    },
  ],  
  sidebyside2: [
    {
      name: "Side 3",
      fileName: "sidebyside21.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534502/sidebyside21_xldu3o.jpg",
    },
    {
      name: "Side 4",
      fileName: "sidebyside22.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534504/sidebyside22_kyxmcj.jpg",
    },
  ],
  sofaservicing: [
    {
      name: "Sofa Servicing 1",
      fileName: "SofaServicing1.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534558/SofaServicing1_ep2uqw.jpg",
    },
    {
      name: "Sofa Servicing 2",
      fileName: "SofaServicing2.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534560/SofaServicing2_ebaesy.jpg",
    },
  ],
  sofaservicing3: [
    {
      name: "Sofa Servicing3 1",
      fileName: "SofaServicing31.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534599/SofaServicing31_jhw9mn.jpg",
    },
    {
      name: "Sofa Servicing3 2",
      fileName: "SofaServicing32.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534601/SofaServicing32_im86fl.jpg",
    },
  ],
  sofaservicing4: [
    {
      name: "Sofa Servicing4 1",
      fileName: "SofaServicing41.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534634/SofaServicing41_y6gre6.jpg",
    },
    {
      name: "Sofa Servicing4 2",
      fileName: "SofaServicing42.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534636/SofaServicing42_dajsha.jpg",
    },
  ],
  sofaservicing5: [
    {
      name: "Sofa Servicing5 1",
      fileName: "SofaServicing51.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534683/SofaServicing51_yjej4u.jpg",
    },
    {
      name: "Sofa Servicing5 2",
      fileName: "SofaServicing52.jpeg",
      path: "https://res.cloudinary.com/autoduka/image/upload/v1734534681/SofaServicing52_w6l803.jpg",
    },
  ],
};


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
              src={`${imageSections.whoweare[1].path}?t=${Date.now()}`}
              alt="About Us"
              className="img-1"
              loading="lazy"  // Lazy load this image
            />

            <div className="img-2__banner">
              <img
                src={`${imageSections.whoweare[0].path}?t=${Date.now()}`}
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
        <LazyVideo poster={`${imageSections.watchus[0].path}?t=${Date.now()}`} alt="Exercise Video" />
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
          img1={`${imageSections.washingrefilling[0].path}?t=${Date.now()}`}
          img2={`${imageSections.washingrefilling[1].path}?t=${Date.now()}`}
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
              src={`${imageSections.Effortlessly[0].path}?t=${Date.now()}`}
              alt="Our Ethos"
              className="img-1"
              loading="lazy"
            />

            <div className="img-2__banner">
              <img
                src={`${imageSections.Effortlessly[1].path}?t=${Date.now()}`}
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
        beforeImage={`${imageSections.sidebyside[0].path}?t=${Date.now()}`}
        afterImage={`${imageSections.sidebyside[1].path}?t=${Date.now()}`}
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
            img1={`${imageSections.refurbishing[0].path}?t=${Date.now()}`}
              img2={`${imageSections.refurbishing[1].path}?t=${Date.now()}`}
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
            img1={`${imageSections.refillingonly[0].path}?t=${Date.now()}`}
              img2={`${imageSections.refillingonly[1].path}?t=${Date.now()}`}
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
          beforeImage={`${imageSections.sidebyside2[0].path}?t=${Date.now()}`}
          afterImage={`${imageSections.sidebyside2[1].path}?t=${Date.now()}`}
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
                img1={`${imageSections.coverchangingrefilling[0].path}?t=${Date.now()}`}
                  img2={`${imageSections.coverchangingrefilling[1].path}?t=${Date.now()}`}
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
                img1={`${imageSections.sofaservicing[0].path}?t=${Date.now()}`}
                  img2={`${imageSections.sofaservicing[1].path}?t=${Date.now()}`}
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
                img1={`${imageSections.sofaservicing[0].path}?t=${Date.now()}`}
                  img2={`${imageSections.sofaservicing[1].path}?t=${Date.now()}`}
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
                img1={`${imageSections.sofaservicing4[0].path}?t=${Date.now()}`}
                  img2={`${imageSections.sofaservicing4[1].path}?t=${Date.now()}`}
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
                img1={`${imageSections.sofaservicing5[0].path}?t=${Date.now()}`}
                  img2={`${imageSections.sofaservicing5[1].path}?t=${Date.now()}`}
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







