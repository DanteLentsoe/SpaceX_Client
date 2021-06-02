import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <>
      <div className="spinner" style={{ fontSize: "14px", marginTop: "10vh" }}>
        <div className="head"></div>
      </div>
    </>
  );
};

export default Loader;
