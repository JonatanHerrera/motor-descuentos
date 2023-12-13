import axios from "axios";

const baseUrl = process.env.REACT_APP_URL_BASE + "/discountsByClientDocument";
const str = process.env.REACT_APP_AUTH_API;
const buffer = new TextEncoder().encode(str);
const base64Encoded = btoa(String.fromCharCode(...new Uint8Array(buffer)));
const authHeader = `Basic ${base64Encoded}`;

async function getDiscouts(userInfo) {
  const { client, brand, mall, token } = userInfo;
  const headers = {
    "Content-Type": "application/json",
    Authorization: authHeader,
    token: token,
  };

  try {
    const payload = { client, brand, mall };
    const { data } = await axios.post(baseUrl, payload, {
      headers: headers,
    });

   
    if (data.length > 0 || data.hasOwnProperty('status') ) {      
      return data;
    } else {
      const R = {
        name: "No hay descuentos aplicables",
        percentage: "-",
        description: "Es cliente no aplica para ningun descuento vigente",
        startDate: "",
        endDate: "",
        mall: "",
      };

      return [R];
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getDiscouts;
