import React from "react";
import "./Footer.css";
import ScrollService from "../../Utilities/scrollService";
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}