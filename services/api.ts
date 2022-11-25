import { AxiosResponse } from "axios";
import axios from "axios";
import { ISendEmail } from "../interfaces/email.interfaces";

const portfolioApi = axios.create({
  baseURL: "https://portfolio-api-h1s0.onrender.com",
});

export const sendEmailService = async (data: ISendEmail): Promise<AxiosResponse | unknown> => {
  try {
    const res = await portfolioApi.post("/emails", data);
    return res;
  } catch (error) {
    return error;
  }
};
