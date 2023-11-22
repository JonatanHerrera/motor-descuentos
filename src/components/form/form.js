import React, { useState, useEffect } from "react";
import discountsService from "../../services/discounts";
import DiscountList from "../discounts/DiscountList";
import { Simulate } from "react-dom/test-utils";

const Form = ({ onLogOut }) => {
  // State to store the input values
  const [document, setDocument] = useState("");
  const [activeBrand, setActiveBrand] = useState();
  const [discountList, setDiscountList] = useState([]);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("loggedAppUser");
    if (loggedUser) {
      setActiveBrand(JSON.parse(loggedUser));
    }
  }, []);
  // Function to handle input changes
  const handleInputChange = (event) => {
    const { value } = event.target;
    setDocument(value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const userInfo = {
      client: document,
      brand: activeBrand.marca,
      token: activeBrand.token,
    };

    try {
      const discounts = await discountsService.getDiscouts(userInfo);
      setDiscountList(discounts);
    } catch (e) {
      console.log(e);
    }

    // You can add additional logic here, like sending the data to a server
  };

  const handleLogOut = () => {
    onLogOut();
  };

  return (
    <div>
      <div>
        <button onClick={handleLogOut}>Cerrar sesión</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Documento cliente
          <input
            type="text"
            name="clientDocument"
            placeholder="Numero identificacion"
            value={document}
            className="inputField"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="submitButton">
          {" "}
          Consultar
        </button>
      </form>
      <div>
        <DiscountList discountList={discountList} />
      </div>
    </div>
  );
};
export default Form;
