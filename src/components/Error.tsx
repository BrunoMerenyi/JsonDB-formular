import React from "react";
import { useRouteError } from "react-router";
import { Button } from "./ui/Button";

export const Error = () => {
  const error = useRouteError() as {
    message?: string;
    status?: number;
    statusText?: string;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-dvh bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-red-100 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {error.status ? `${error.status}` : "Error"}
          </h1>
          <h2 className="text-xl text-center text-gray-600 mb-6">
            {error.statusText || "Something went wrong"}
          </h2>
          <p className="text-gray-500 text-center mb-8">
            {error.message || "An unexpected error has occurred."}
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:cursor-pointer transition-colors"
            >
              Go back home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
