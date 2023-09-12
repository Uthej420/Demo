import React, { Component } from "react";
import { BsShieldCheck ,BsHandbag} from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import { CgArrowsExchange } from "react-icons/cg";
import { FaTruckFast } from "react-icons/fa6";
import Navbar from "../Navbar";
import "./index.css";
export default class Home extends Component {
  state = { count: 1 };
  onHandleCart = (e) => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  componentDidMount() {
    setTimeout(() => {}, 200);
  }
  render() {
    const { count } = this.state;
    return (
        <><Navbar />
      <div className="main-container">
        <div className="home-container">
          <div className="card-container">
            <div className="offer-section-banner">
              <p>DEAL ENDS IN</p>
              <p>15:30:01</p>
            </div>
          </div>
          <div className="body-container">
            <div className="description">
              <div className="offer-container">
                <h4>VS Fashions</h4>
                <p className="offer">-50%</p>
              </div>
              <p className="product-heading">
                Black Double Breasted Long-sleeved Dress
              </p>
              <div className="offer-container">
                <p style={{ color: "red" }}>
                  $32
                  <span style={{ color: "gray" }}>
                    <s>$64</s>
                  </span>
                </p>
                <select className="select-container">
                  <option>size</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div>
              <ul className="cards-section">
                <li className="card">
                  <BsShieldCheck size={20} />
                  <p style={{fontWeight:'600'}}>100%</p>
                  <p style={{ color: "gray" }}>GENUNE!</p>
                </li>
                <li className="card">
                  <FcMoneyTransfer size={20} />
                  <p  style={{fontWeight:'600'}}>CASH</p>
                  <p style={{ color: "gray" }}>ON DELIVERY</p>
                </li>
                <li className="card">
                  <CgArrowsExchange size={20} />
                  <p style={{fontWeight:'600'}}>14 DAYS</p>
                  <p style={{ color: "gray" }}>EXCHANGE</p>
                </li>
                <li className="card">
                  <FaTruckFast size={20} />
                  <p style={{fontWeight:'600'}}>
                    FREE<span style={{ color: "red" }}>*</span>
                  </p>
                  <p style={{ color: "gray" }}>DELIVERY</p>
                </li>
              </ul>
              <div className="footer-section">
                <p className="cart-count">{count}</p>
                <button className="fotter-button" onClick={this.onHandleCart}>
                    <BsHandbag size={25} color="#fff"/>
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
