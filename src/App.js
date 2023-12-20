import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
// import ProductList  from "./features/product-list/ProductList";
// import NavBar from "../features/navbar/Navbar";



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  
 
]);

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
// export default Counter;
