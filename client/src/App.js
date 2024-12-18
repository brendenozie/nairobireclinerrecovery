import React, { useEffect } from "react";
import "./App.css";
import "./scss/main.scss";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage";
import LogIn from "./pages/Log-in/log-in.component";
import SignUp from "./pages/sign-up/sign-up.component";
import Everything from "./pages/shop/everything.component";
import UpdateImages from "./pages/editimages/UpdateImages";
import Chairs from "./pages/shop/chairs.component";
import Sofas from "./pages/shop/sofas.component";
import Stools from "./pages/shop/stools.components";
import Lights from "./pages/shop/lights.component";
import Ottomans from "./pages/shop/ottomans.component";
import Checkout from "./pages/checkout/checkout.component";
import Footer from "./components/footer/footer.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments,
// } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import ProductModal from "./components/product-modal/product-modal.component";
import SHOP_DATA from "./pages/shop/shop.data";
import { selectModalHidden } from "./redux/product-modal/product-modal.selector";
import { useLocation } from "react-router-dom";

const App = ({ setCurrentUser, collectionsArray, currentUser, productModalHidden }) => {
  const location = useLocation();

  // useEffect(() => {
  //   const unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot((snapShot) => {
  //         setCurrentUser({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data(),
  //           },
  //         });
  //       });
  //     } else {
  //       setCurrentUser(userAuth);
  //       addCollectionAndDocuments("collections", collectionsArray);
  //     }
  //   });

  //   return () => {
  //     unsubscribefromAuth();
  //   };
  // }, [setCurrentUser, collectionsArray]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={{ position: "relative", backgroundColor:"#fff"}}>
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Header />}
      
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <LogIn />}  />
        <Route path="/signup" element={currentUser ? <Navigate to="/" /> : <SignUp />}  />
        {/* <Route exact path="/collections" element={<Everything />} /> */}
        <Route exact path="/category/chairs" element={<Chairs />} />
        <Route exact path="/category/lights" element={<Lights />} />
        <Route exact path="/category/sofas" element={<Sofas />} />
        <Route exact path="/category/stools" element={<Stools />} />
        <Route exact path="/category/ottomans" element={<Ottomans />} />
        <Route exact path="/updateimages" element={<UpdateImages />} />
        <Route exact path="/checkout" element={<Checkout />} />
        
        {/* {!productModalHidden && (
          <Route path={["/category", "/collections  "]} element={<ProductModal />} />
        )} */}
      </Routes>
      
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Footer />}
    </div>

  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
  productModalHidden: selectModalHidden,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
