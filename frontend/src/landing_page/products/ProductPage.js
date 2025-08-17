import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="media/kite.png"
        productName="Pulse"
        productDescription="Our ultra-fast flagship trading platform with real-time market data, advanced charts, and a sleek UI. Pulse is available seamlessly on Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/console.png"
        productName="Orbit"
        productDescription="The central dashboard for your TradeWiz account. Track trades, analyze investments, and access deep insights with smart visualizations."
        learnMore=""
      />

      <LeftSection
        imageURL="media/coin.png"
        productName="Nest"
        productDescription="Invest in mutual funds and long-term assets online with zero commission, delivered directly to your account. Nest makes investing simple and seamless across devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Bridge API"
        productDescription="Build custom trading platforms and apps with our simple yet powerful APIs. Bridge API empowers developers and startups to innovate in the financial world."
        learnMore=""
      />

      <LeftSection
        imageURL="media/varsity.png"
        productName="Pathfinder"
        productDescription="A learning platform designed for traders and investors. Pathfinder offers step-by-step lessons, bite-sized modules, and visual guides to help you master the markets."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the TradeWiz.tech blog.
      </p>

      <Universe />
    </>
  );
}

export default ProductPage;
