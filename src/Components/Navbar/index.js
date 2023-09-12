import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { PiExportLight } from "react-icons/pi";
import "./index.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <IoIosArrowBack />
        <div className="nav-items-container">
          <BsHeart />
          <PiExportLight />
        </div>
      </div>
    );
  }
}
