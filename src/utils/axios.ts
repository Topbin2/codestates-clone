import axios from "axios";

export const custom = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
