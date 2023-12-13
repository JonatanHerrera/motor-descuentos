import React from "react";
import "./DiscountList.css";



const DiscountList = ({ discountList }) => {
  const list = [...discountList];

  list.sort((a, b) => {
    // Convertir porcentajes a números para comparar
    const percentageA = a.percentage !== "-" ? parseInt(a.percentage, 10) : 0;
    const percentageB = b.percentage !== "-" ? parseInt(b.percentage, 10) : 0;

    return percentageB - percentageA; // Ordenar de forma descendente
  });

  return (
    <div className="row">
      {list.map((discount,index) => (
        <div key={index} className="card text-bg-light m-3 discount-card">
          <div className="card-body">
            <h5 className="card-title">{discount.name} {discount.percentage !== "-" ? (<span className="badge rounded-pill text-bg-warning">{discount.percentage} %</span>) : null}</h5>           
            <p className="card-text">{discount.description}</p>
            {discount.endDate !== "" ?  <p className="card-text"><small className="text-body-secondary">Vencimiento: {discount.endDate}</small></p> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountList;
