import axios from "axios";
import { APIResponseProps } from "../APIResponseProps";

const API_BASE_URL = "https://pokeapi.co/api/v2";

const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function getData(response: APIResponseProps<"">) {
  return response.data
}

export default request;
