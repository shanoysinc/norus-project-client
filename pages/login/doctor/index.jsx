import React, { useState } from "react";
import { useMutation } from "react-query";
import { Login } from "../../../components/login/Login";
import { useErrorCheck } from "../../../hooks/error/useErrorCheck";
import validator from "validator";
import { baseApiClient } from "../../../lib/axios/baseApiClient";
import { useAuth } from "../../../hooks";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError } = useErrorCheck();
  const { setAuth } = useAuth();
  const router = useRouter();

  const { isLoading, mutate } = useMutation(
    (loginInfo) => baseApiClient.post("/doctor/login", loginInfo),
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
      onError: (error) => {
        setError({
          isError: true,
          errorMessages: {
            message: error.response.data.errorMessage,
          },
        });
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
    mutate({ email: email.trim(), password });
  };
  return (
    <Login
      userTitle={"Doctor login Portal"}
      setEmail={setEmail}
      setPassword={setPassword}
      submitButton={submitButton}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default index;
