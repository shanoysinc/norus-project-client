import axios from "axios";

const ISSERVER = typeof window === "undefined";
export const baseApiClient = axios.create({
  withCredentials: true,
  headers: {
    authorization: !ISSERVER
      ? `Bearer ${localStorage.getItem("token")}`
      : "Bearer",
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
