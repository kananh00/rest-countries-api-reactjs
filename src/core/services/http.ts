// import axios from 'axios';

// const token = localStorage.getItem('token');
// if (token) {
//     axios.defaults.headers.common['Authorization'] = token;
// }

// Add a request interceptor
// axios.interceptors.request.use((config) => {
    // Do something before request is sent
//     return config;
// }, (error) => {
    // Do something with request error
//     return Promise.reject(error);
// });

// Add a response interceptor
// axios.interceptors.response.use((response) => {
    // Do something with response data
//     return response;
// }, (error) => {
    // Do something with response error
//     return Promise.reject(error);
// });

// export default axios;

import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
  headers: {
    "Content-type": "application/json"
  }
});