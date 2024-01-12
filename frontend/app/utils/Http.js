import axios from 'axios';

// export const setToken = (token) => {
//   axios.defaults.headers.common['x-auth-token'] = token;
// }

const baseUrl = process.env.SERVER_URL || "http://localhost:5000/api/v1";

const Http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Origin": "*"
  }
});

export default Http;
