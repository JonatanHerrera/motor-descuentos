import React, { useState } from 'react';


const Form = () =>{

 // State to store the input values
 const [document, setDocument] = useState("");


 // Function to handle input changes
 const handleInputChange = (event) => {
   const { doc, value } = event.target;
   
     setDocument(value);
   
 };

 // Function to handle form submission
 const handleSubmit = (event) => {
   event.preventDefault(); // Prevents the default form submission behavior

   // Log the entered values to the console
   console.log("Submitted document:", document);
  

   // You can add additional logic here, like sending the data to a server
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
   </div>
 );
 };
export default Form;