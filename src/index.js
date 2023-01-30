import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Multiplayer from "./Multiplayer";
import Computer from "./Computer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import PlayMulti from "./PlayMulti";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/multiplayer",
    element: <Multiplayer/>,
  },
  {
    path: "/computer",
    element: <Computer/>,
  },
  {
    path: "/playmulti",
    element: <PlayMulti/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
    
  </React.StrictMode>
);
