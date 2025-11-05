import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  learnMore,


}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
             <a href={learnMore}>Learn More</a>
          </div>
          </div>
          <div className="col-6 p-5">
            <img src={imageURL} style={{ height: "95%", width: "95%" }} />
          </div>
        </div>
      </div>
    
  );
}

export default LeftSection;
