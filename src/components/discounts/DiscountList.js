import React from "react";

const DiscountList = ({ discountList }) => {
  const list = discountList;

  return (
    <div>
      <ul>
        {list.map((discount, index) => (
          <li key={index}>
            {discount.Descuento} - {discount.Descripcion_Descuento}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscountList;
