import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AppRouter />
   </StrictMode>
);
// This code is the entry point for a React application. It uses React's StrictMode to help identify potential problems in the application. The `createRoot` function from 'react-dom/client' is used to create a root for the React application, which is then rendered into the DOM element with the ID 'root'. The main component of the application, `App`, is imported from './App.jsx' and rendered inside the StrictMode wrapper.
