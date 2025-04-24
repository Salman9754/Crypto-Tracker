import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <div className="conatiner d-flex justify-content-between py-3">
        <div className="logo fw-bold fs-4 text-white">Crypto Tracker</div>
        <div className="button">
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
