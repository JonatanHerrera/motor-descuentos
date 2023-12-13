import React from "react";
import "./DiscountList.css";
const DiscountList = ({ discountList }) => {
  const list = discountList;

  return (
    <div className="row">
      {list.map((discount,index) => (
        <div key={index} className="card text-bg-light m-3 discount-card">
          <div className="card-body">
            <h5 className="card-title">{discount.name} </h5>
            <p className="card-text">{discount.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountList;
