

import React, { useState } from "react";
// import "./Pricing.css";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="background-Color-Main">
      <div className="background-Color-secondary">
        <div className="Pricing-container">
          <div className="Pricing-option1">
            <h3>Sadə</h3>
            <h2>{isMonthly ? "$10" : "$100"}</h2>
            <span>
              Ödəniş {isMonthly ? "aylıq" : "illik"} <br />
              <a href="#">Daha çox</a>
            </span>
            <button id="button1">Seç</button>
          </div>
          <div className="Pricing-option2">
            <h3>Pro</h3>
            <h2>{isMonthly ? "$20" : "$200"}</h2>
            <span>
            Ödəniş {isMonthly ? "aylıq" : "illik"} <br />
              <a href="#">Daha çox</a>
            </span>
            <button id="button2">Seç</button>
          </div>
          <div className="Pricing-option3">
            <h3>Premium</h3>
            <h2>{isMonthly ? "$30" : "$300"}</h2>
            <span>
            Ödəniş {isMonthly ? "aylıq" : "illik"} <br />
              <a href="#">Daha çox</a>
            </span>
            <button id="button3">Seç</button>
          </div>
        </div>
        <div id="darktheme">
          <span>Aylıq</span>
          <div className="Pricing-yearly-darktheme">
            <div
              className="Pricing-monthly-darktheme"
              style={isMonthly ? { left: "5px" } : { left: "32px" }}
            ></div>
            <div
              className="Pricing-monthly-light"
              style={isMonthly ? { left: "32px" } : { left: "5px" }}
            ></div>
          </div>
          <span>İllik</span>
        </div>
        <div>
          <button id="monthly-yearly-toggle" onClick={togglePlan}>
            {isMonthly ? "Aylıq" : "İllik"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
