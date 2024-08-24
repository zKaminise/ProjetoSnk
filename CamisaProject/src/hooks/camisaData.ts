import axios from "axios";
import { Camisa } from "../interface/camisaData";

export async function getCamisas(): Promise<Camisa[]> {
  const API_URL = "http://localhost:8080";
  const response = await axios.get(API_URL + "/camisa");

  return response.data as Camisa[];
}
