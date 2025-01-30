import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MainLayout from "./Layout/MainLayout";

const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

const RoutesProvider = () => <RouterProvider router={router} />;

export default RoutesProvider;
