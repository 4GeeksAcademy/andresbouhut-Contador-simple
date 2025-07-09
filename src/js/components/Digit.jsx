import React from "react";

const Digit = ({ digits }) => {
  return (
    <div className="d-flex justify-content-center align-items-center fs-1">
      <i className="fa-solid fa-clock me-3"></i>
      <div className="digit">{digits}</div>
    </div>
  );
};

export default Digit;