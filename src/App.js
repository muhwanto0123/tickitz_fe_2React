import './style/App.css';
import './style/App.mobile.css';

import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Detail from './pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail/:slug",
    element: <Detail />,
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
