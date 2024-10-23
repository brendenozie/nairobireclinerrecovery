import React, {useEffect} from "react";
import { InitPreviewAnimation } from "../../js/animations";

import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
import {
  imgChair,
  imgSofa,
  imgOtto,
} from "../../assets/assets";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";
 
const CollectionPreview = (props) => {
  
  useEffect(() => {
     InitPreviewAnimation();
  })

     return (
      <section className="section__browse-collections">
        <p className="title">Our Repairs</p>
        <div className="preview">
          <div className="preview__left img">
            <img
              alt=""
              src={imgChair.second}
              className="img__small"
              style={{ left: "50%", top: "12%", opacity: "1" }}
              id="1"
               loading="lazy"
            />
            <img
              alt=""
              src={imgSofa.first}
              className="img__large"
              style={{ left: "45%", bottom: "10%", opacity: "0" }}
              id="3"
               loading="lazy"
            />
            <img
              alt=""
              src={imgSofa.second}
              className="img__large"
              style={{ right: "45%", top: "-10%", opacity: "0" }}
              id="3"
               loading="lazy"
            />
            <img
              alt=""
              src={imgChair.third}
              className="img__small"
              style={{ bottom: "20%", left: "20%", opacity: "1" }}
              id="1"
               loading="lazy"
            />
            <img
              alt=""
              src={imgOtto.third}
              className="img__small"
              style={{ bottom: "20%", left: "20%", opacity: "0" }}
              id="5"
               loading="lazy"
            />
            <img
              alt=""
              src={imgOtto.second}
              className="img__small"
              style={{ left: "50%", top: "12%", opacity: "0" }}
              id="5"
               loading="lazy"
            />
          </div>

          <div className="preview__text">
            { props.collections.map(({ id, urlTitle }) => {
              return (
                <Link
                  to={`/`}
                  id={id}
                  key={id}
                  className="collection-title"
                >
                  {urlTitle}
                </Link>
              );
            })}
            <Link to="/" className="btn btn__text">
              Recliner Restoration and Recovery
            </Link>
          </div>
          <div className="preview__right img">
            <img
              alt=""
              src={imgChair.first}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "1",
              }}
              id="1"
               loading="lazy"
            />{" "}
            <img
              alt=""
              src={imgSofa.third}
              className="img__large"
              style={{ right: "35%", top: "10%", opacity: "0" }}
              id="3"
               loading="lazy"
            />
            <img
              alt=""
              src={imgOtto.first}
              className="img__large"
              style={{
                top: "5%",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "0",
              }}
              id="5"
               loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  }
 
const mapStateToProps = createStructuredSelector({
  collections: selectDirectorySection,
});
export default connect(mapStateToProps)(CollectionPreview);
