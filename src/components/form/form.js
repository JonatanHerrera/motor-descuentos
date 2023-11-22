import React, { useState, useEffect } from "react";
import discountsService from "../../services/discounts";

const Form = ({ onLogOut }) => {
  // State to store the input values
  const [document, setDocument] = useState("");
  const [activeBrand, setActiveBrand] = useState();

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
      console.log(discounts);
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
      <form onSubmit={handleSubmit}>
        <label>
          Documento cliente
          <input
            type="text"
            name="clientDocument"
            value={document}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Consultar</button>
      </form>
      <div>
        <button onClick={handleLogOut}>Cerrar sesión</button>
      </div>
    </div>
  );
};
export default Form;
