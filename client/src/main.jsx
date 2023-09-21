import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-u0mhtu6lsvrvyrv2.us.auth0.com"
     clientId="4nkXX6DQIAM1w86TuR9GYz7VLOQRCFuv"
     authorizationParams={{
      redirect_uri: "http://127.0.0.1:5173/"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
