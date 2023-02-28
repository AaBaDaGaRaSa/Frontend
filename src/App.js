import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Menu from "./components/Menu/Menu";
import About from "./pages/About/About";

import {
  createBrowserRouter,
  Route,
  Outlet,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  // const Layout = () => {
  //   return (
  //     <div>
  //       <Navbar />
  //       <Outlet />
  //     </div>
  //   );
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
