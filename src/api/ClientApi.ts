import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 404) {
        console.error('Not Found!');
      }
      return Promise.reject(error);
    }
  );
  export default apiClient;