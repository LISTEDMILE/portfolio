import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/protfolio";
import ConnectPage from "./pages/connectMe";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const route = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        { path: "/portfolio", element: <PortfolioPage /> },
        { path: "/connect", element: <ConnectPage /> },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
