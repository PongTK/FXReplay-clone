import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Order/Orders";
import Indicators from "./components/Indicators/indicators";
import Timeframes from "./components/timeframes/timeframes";
import Testimonial from "./components/Testimonial/Testimonial";
import Pricing from "./components/Pricing/Pricing";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Orders />
      <Indicators />
      <Timeframes />
      <Testimonial />
      <Pricing />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
