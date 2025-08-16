import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 border-top mt-5">
        <h1 className=" text-center ">People</h1>
      </div>

      <div
        className="row p-5   text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/founders.jpg"
            style={{ width: "40%", borderRadius: "100%" }}
          ></img>
          <h4 className="mt-5">Sarvjaya & Rishabh</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>Rishabh and Sarvjaya bootstrapped and founded **Tradewiz** to
          revolutionize the trading experience by addressing the challenges
          faced by modern traders and investors.</p> 
          <p>With a deep passion for
          innovation and a shared vision, they are redefining the landscape of
          financial technology. Tradewiz is at the forefront of empowering
          individuals and businesses with tools that simplify and enhance
          trading and investment decisions.
          </p> 
          <p>Rishabh is an advocate for
          accessible financial solutions, while Sarvjaya’s strategic insight
          drives Tradewiz’s mission forward. Together, they are committed to
          transforming the trading ecosystem for a smarter and more inclusive
          future. When not strategizing for Tradewiz, Rishabh finds his zen in
          coding, while Sarvjaya thrives in exploring creative pursuits.</p>
          <p>Connect on <a style={{textDecoration:"none"}} href="#">Homepage </a>/ <a style={{textDecoration:"none"}} href="#">TradingQnA </a>/<a  style={{textDecoration:"none"}}href="#">Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
