import React, { useState } from "react";
import { useMutation } from "react-query";
import { Login } from "../../../components/patient/Login";
import { useErrroCheck } from "../../../hooks/error/useErrroCheck";
import validator from "validator";
import { baseApiClient } from "../../../lib/axios/baseApiClient";
import { useAuth } from "../../../hooks";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError } = useErrroCheck();
  const { setAuth } = useAuth();
  const router = useRouter();

  const info = { email: "shanoy@gmail.com", password: "123456" };
  const mutation = useMutation(
    (loginInfo) => baseApiClient.post("/doctor/login", info),
    {
      onSuccess: (res) => {
        const data = res.data;
        if (data.auth) {
          setAuth(data);
          const token = data.doctor.token;
          localStorage.setItem("token", token);
          router.push("/doctor");
        }
      },
    }
  );

  const submitButton = () => {
    if (!validator.isEmail(email)) {
      setError({
        isError: true,
        errorMessages: {
          email: "Please enter a valid email",
        },
      });
      return;
    }

    if (password.length < 6) {
      console.log("not strong");
      setError({
        isError: true,
        errorMessages: {
          password: "Password length must be 6 or greater",
        },
      });
      return;
    }

    if (error.isError) {
      setError({ errorMessages: {}, isError: false });
    }
    mutation.mutate({ email: email.trim(), password });
  };
  return (
    <Login
      userTitle={"Doctor login Portal"}
      setEmail={setEmail}
      setPassword={setPassword}
      submitButton={submitButton}
      error={error}
    />
  );
};

export default index;
