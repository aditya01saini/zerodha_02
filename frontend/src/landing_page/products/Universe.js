import React from "react";

function UniverseSection() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-2">
          {" "}
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-5 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ height: "40%", width: "40%" }}
          />
          <p className="text-muted text-small mt-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media\images\streakLogo.png "
            style={{ height: "40%", width: "40%" }}
          />
          <p className="text-muted text-small mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ height: "40%", width: "40%" }}
          />
          <p className="text-muted text-small mt-3 ">
            Options trading platform
          </p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ height: "40%", width: "40%" }}
          />
          <p className="text-muted text-small mt-3">Asset management</p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media\images\goldenpiLogo.png"
            style={{ height: "40%", width: "40%" }}
          />
          <p className="text-muted text-small mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4 mt-5 p-3">
          <img
            src="media\images\dittoLogo.png"
            style={{ height: "40%", width: "40%" }}
          />
          <p className="text-muted text-small mt-3">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default UniverseSection;
