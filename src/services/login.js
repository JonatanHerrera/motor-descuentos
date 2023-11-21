import axios from "axios";

const baseUrl = "http://localhost:8080/login";
const username = "Descuentos"; // Reemplaza con tu nombre de usuario
const password = "Descuentos123"; // Reemplaza con tu contraseña

const str = `${username}:${password}`;
const buffer = new TextEncoder().encode(str);
const base64Encoded = btoa(String.fromCharCode(...new Uint8Array(buffer)));

// const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
const authHeader = `Basic ${base64Encoded}`;

const headers = {
  "Content-Type": "application/json", // Example content type
  Authorization: authHeader, // Example authorization header
  // Add other headers as needed
};

const login = async (Credentials) => {
  const { data } = await axios.post(baseUrl, Credentials, {
    headers: headers,
  });

  return data;
};

export default { login };
