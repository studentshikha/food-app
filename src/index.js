import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";



ReactDOM.render(<RouterProvider router={appRouter}/>, document.getElementById("root"));