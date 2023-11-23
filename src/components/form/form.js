import React, { useState, useEffect } from "react";
import discountsService from "../../services/discounts";
import DiscountList from "../discounts/DiscountList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

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
    <div className="">
      <div className="dropdown position-fixed top-0 end-0 mt-3 me-3 bd-mode-toggle">
        <button className="btn btn-secondary" onClick={handleLogOut}>
          Cerrar sesión
        </button>
      </div>
      <div className="container">
        <div className="">
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="clientDocument"
                value={document}
                className="form-control"
                onChange={handleInputChange}
              />
              <label className="floatingInput">Documento cliente</label>
            </div>

            <button type="submit" className="btn btn-primary">
              Consultar
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5 pt-3 discounts">
        <DiscountList discountList={discountList} />
      </div>
    </div>
  );
};
export default Form;
