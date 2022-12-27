import React from "react";
import { Link } from "react-router-dom";
//
import vector from "../asset/Vector.png";
//
import "./Button.css";

function Button() {
  return (
    <div className="main-btn">
      <div className="button-start button">
        <Link to="/register">
          <button>
            Get start
            <img src={vector} alt="vector" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Button;
