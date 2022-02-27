import React, { useEffect } from "react";
import { useAuth } from "../../hooks";
import { Roles } from "../../const";
import jwt from "jwt-decode";
import { baseApiClient } from "../../lib/axios/baseApiClient";
import { useRouter } from "next/router";

export function RootApp({ Component, pageProps }) {
  const { setAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      if (
        router.pathname.includes("/login") ||
        router.route === "/" ||
        router.pathname.includes("/signup")
      ) {
        return;
      }
      if (
        router.pathname.includes("/patient") ||
        router.pathname.includes("/doctor")
      ) {
        return router.push("/login");
      }
      return router.push("/");
    }

    async function getPatient() {
      const data = await baseApiClient.get("/patient", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return data;
    }
    async function getDoctor() {
      const res = await baseApiClient.get("/doctor");
      return res;
    }
    const { userRole } = jwt(token);

    if (userRole === Roles.PATIENT) {
      getPatient()
        .then((res) => {
          const { data } = res;
          if (data.auth && data.patient) {
            setAuth(data);

            if (!router.pathname.includes("/patient")) {
              return router.push("/patient");
            }
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          return router.push("/login");
        });
    }
    if (userRole === Roles.DOCTOR) {
      getDoctor()
        .then((res) => {
          const { data } = res;
          if (data.auth && data.doctor) {
            setAuth(data);

            if (!router.pathname.includes("/doctor")) {
              router.push("/doctor");
            }
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          return router.push("/login");
        });
    }
  }, []);
  return <Component {...pageProps} />;
}
