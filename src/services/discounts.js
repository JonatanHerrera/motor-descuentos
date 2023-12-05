import axios from "axios";

const baseUrl = "http://localhost:8080/discountsByClientDocument";
const username = "Descuentos"; // Reemplaza con tu nombre de usuario
const password = "Descuentos123"; // Reemplaza con tu contraseña

const str = `${username}:${password}`;
const buffer = new TextEncoder().encode(str);
const base64Encoded = btoa(String.fromCharCode(...new Uint8Array(buffer)));
const authHeader = `Basic ${base64Encoded}`;

const headers = {
  "Content-Type": "application/json", // Example content type
  Authorization: authHeader, // Example authorization header
  // Add other headers as needed
};

async function getDiscouts(userInfo) {
  try {
    const { data } = await axios.post(baseUrl, userInfo, {
      headers: headers,
    });
    if (data.length > 0) {
      return data;
    } else {
      const R = {Marca : "",Cliente:"", Fecha_Consulta:"",Descuento:"No se encontraron descuentos asociados al cliente",Descripcion_Descuento:""}
    
      return [R];
    }

    // Handle the response data here
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  }
}

export default getDiscouts;
