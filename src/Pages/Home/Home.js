import React from "react";
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Review from "./Review/Review";
import Services from "./Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
