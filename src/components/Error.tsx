import React from "react";
import { useRouteError } from "react-router";

export const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh text-6xl">
      {error.message}
      {error.status}
    </div>
  );
};
