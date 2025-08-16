import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5  mt-5 mb-5">
        <h1 className=" text-center fs-2">
          We pioneered the discount broking model in India.<br></br> Now, we are
          breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted " style={{lineHeight:"1.8", fontSize:"1.2em"}}>
        <div className="col-6 p-5">
          <p>
            We launched Tradewiz on the 15th of August, 2010, with a mission to
            eliminate all barriers faced by traders and investors in India,
            including costs, support, and technology. <p>The name "Tradewiz"
            reflects our commitment to simplifying and empowering the trading
            experience with wisdom and innovation.</p> <p>Today, our groundbreaking
            pricing structures and cutting-edge technology have established us
            as a leader in the trading industry.</p> <p>With over 1 crore clients
            placing millions of orders daily on our robust investment platforms,
            we contribute to over 15% of India's retail trading volumes.</p>
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            <p>At Tradewiz, we also take pride in running several popular open
            online educational and community initiatives designed to empower
            retail traders and investors with knowledge and insights.</p> <p>Through
            Tradewiz Labs, our fintech fund and incubator, we’ve partnered with
            and invested in multiple promising fintech startups, aiming to drive
            innovation and expand the Indian capital markets ecosystem.</p> <p>But
            that’s not all—our journey is one of constant evolution. We’re
            always working on something exciting and transformative. Stay tuned
            for the latest updates on our blog, or explore what the media has to
            say about us.</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
