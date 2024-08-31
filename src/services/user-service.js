import axios from "axios";
import { BFF_URL } from "../configurations";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BFF_URL}/users`);
    return data;
  } catch (e) {
    console.log("error:", e);
  }
};
