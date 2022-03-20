import React from "react";
import logo from "../../../assets/logo.svg";

export default function Preloader({ loading }) {
  return (
    <div className="absolute w-full h-full z-40 bg-white flex items-center justify-center">
      <img src={logo} className="floating " width="150" alt="" />
    </div>
  );
}
