import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import "./index.css";
import App from "./App.tsx";
import Users from "./pages/Users.tsx";
import { Error } from "./components/Error.tsx";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
const BrowserError = () => {
  return (
    <div>
      <Error />
    </div>
  );
};
const router = createBrowserRouter([
  {
    errorElement: <BrowserError />,
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
