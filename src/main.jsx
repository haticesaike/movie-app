import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <div
      style={{
        backgroundColor: "#12151c",
        height: "100vh",
      }}
    >
      <App />
    </div>
  </MantineProvider>
);
