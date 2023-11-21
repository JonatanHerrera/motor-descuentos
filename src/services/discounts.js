import axios from 'axios'

const baseUrl = 'http://localhost:8080/discountsByClientDocument'
const username = 'Descuentos'; // Reemplaza con tu nombre de usuario
const password = 'Descuentos123'; // Reemplaza con tu contraseña

const basicAuthCredentials = {
    username: username,
    password: password
  };



  const getdiscouts = async data =>{
    try {
        const {data} = await axios.post(baseUrl, data, {
          auth: basicAuthCredentials
        });
      
        // Handle the response data here
        console.log('Response:',data);
      } catch (error) {
        // Handle errors here
        console.error('Error:', error);
      }
  }

 export default {getdiscouts}