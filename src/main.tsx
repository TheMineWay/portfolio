import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "@providers/providers";
import Title from "@components/presentation/title";
import "./index.pcss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Title />
    </Providers>
  </React.StrictMode>
);
