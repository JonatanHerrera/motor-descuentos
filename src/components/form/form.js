import React, { useState, useEffect } from "react";
import getDiscouts from "../../services/discounts";
import logo from "../../Images/logo.svg";
import DiscountList from "../discounts/DiscountList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

const Form = () => {
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
      const discounts = await getDiscouts(userInfo);
      setDiscountList(discounts);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container ">
      <div className="row">
        <img className="mb-5" src={logo} alt="logo-login" height="100"></img>
      </div>
      <div className="row ">
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="form-floating mb-3">
            <input
              type="text"
              name="clientDocument"
              value={document}
              className="form-control"
              onChange={handleInputChange}
            />
            <label className="floatingInput">
              Ingresa aquí el documento del cliente
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Consultar
          </button>
        </form>
      </div>
      <div className="row">
      <p className="mt-4">
        Aquí aparecerán los descuentos disponible para el cliente. Recuerda
        siempre aplicar el mayor de todos.
      </p>

      </div>
     
      <div className="col mt-5 pt-3 discounts">
        <DiscountList discountList={discountList} />
      </div>
    </div>
  );
};
export default Form;
