import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 p-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              learnMore
            </a>
          </div>
        </div>
        <div className="col-6 ">
          <img src={imageURL}></img>
        </div>
      </div>
    </div>
  );
}
export default RightSection;
