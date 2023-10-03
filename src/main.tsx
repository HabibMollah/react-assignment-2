import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CityContextProvider from "./contexts/CityContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CityContextProvider>
        <App />
      </CityContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
