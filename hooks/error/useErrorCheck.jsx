import React, { useState } from "react";

export const useErrorCheck = () => {
  const [error, setError] = useState({
    isError: false,
    errorMessages: {},
  });
  return { error, setError };
};
