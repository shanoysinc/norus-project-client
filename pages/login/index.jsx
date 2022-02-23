import React, { useState } from "react";
import { Login } from "../../components/patient/Login";
import { useMutation } from "react-query";
import { baseApiClient } from "../../lib/axios/baseApiClient";
import { useAuth } from "../../hooks";
import { useRouter } from "next/router";
import { useErrroCheck } from "../../hooks/error/useErrroCheck";
import validator from "validator";

const index = () => {
  const router = useRouter();
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError } = useErrroCheck();

  const mutation = useMutation(
    (loginInfo) => baseApiClient.post("/patient/login", loginInfo),
    {
      onSuccess: (res) => {
        const data = res.data;
        if (data.auth) {
          setAuth(data);
          const token = data.patient.token;
          localStorage.setItem("token", token);
          router.push("/patient");
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
      userTitle={"Patient login Portal"}
      setEmail={setEmail}
      setPassword={setPassword}
      submitButton={submitButton}
      error={error}
    />
  );
};

export default index;
