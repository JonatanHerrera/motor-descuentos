import React from "react";

const DiscountList = ({ discountList }) => {
  const list = discountList;

  return (
    <div>
      <ul>
        {discountList.map((discount, index) => (
          <li key={index}>{discount}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiscountList;
