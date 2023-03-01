import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Cart from './components/Cart/Cart'

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
      path: "cart",
      element: <Cart />,
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
