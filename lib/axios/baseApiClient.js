import axios from "axios";

const ISSERVER = typeof window === "undefined";
export const baseApiClient = axios.create({
  withCredentials: true,
  headers: {
    "x-access-token": !ISSERVER ? localStorage.getItem("token") : "",
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
