import React, { useState } from "react";

export const useErrroCheck = () => {
  const [error, setError] = useState({
    isError: false,
    errorMessages: {},
  });
  return { error, setError };
};
