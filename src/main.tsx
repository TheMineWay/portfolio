import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "@providers/providers";
import "./index.pcss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Providers>
  </React.StrictMode>
);
