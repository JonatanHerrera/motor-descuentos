import axios from "axios";

const baseUrl = process.env.REACT_APP_URL_BASE + "/login";

const str = process.env.REACT_APP_AUTH_API;
const buffer = new TextEncoder().encode(str);
const base64Encoded = btoa(String.fromCharCode(...new Uint8Array(buffer)));

// const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
const authHeader = `Basic ${base64Encoded}`;

const headers = {
  "Content-Type": "application/json", // Example content type
  Authorization: authHeader, // Example authorization header
  // Add other headers as needed
};

async function login(Credentials) {
  try {
    const { data } = await axios.post(baseUrl, Credentials, {
      headers: headers,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}

export default login;
