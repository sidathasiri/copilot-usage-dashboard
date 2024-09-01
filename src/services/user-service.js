import axios from "axios";
import { API_KEY, BFF_URL } from "../configurations";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${BFF_URL}/users`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    return data;
  } catch (e) {
    console.log("error:", e);
  }
};

export const getUsersMetrics = async (userIds, metricName) => {
  try {
    const { data } = await axios.post(
      `${BFF_URL}/metrics`,
      {
        githubIds: userIds,
        metricName,
      },
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    return data;
  } catch (e) {
    console.log("error:", e);
  }
};
