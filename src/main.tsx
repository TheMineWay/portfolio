import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "@providers/providers";
import Title from "@components/presentation/title";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "./index.pcss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Title />
    </Providers>
  </React.StrictMode>
);
