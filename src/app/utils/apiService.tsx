import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getRequest = async (endpoint: string) => {
  const response = await axios.get(`${BASE_URL}${endpoint}`);
  return response;
};
