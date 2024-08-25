import axios from "axios";
import { Camisa } from "../interface/camisaData";

export async function getCamisas(): Promise<Camisa[]> {
  const response = await axios.get(import.meta.env.VITE_API_URL + "/camisa");

  return response.data as Camisa[];
}
