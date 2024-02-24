import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "@providers/providers";
import { i18nSetup } from "@i18n/i18n.setup";
import Presentation from "@components/presentation/presentation";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "./index.pcss";

i18nSetup();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Presentation />
    </Providers>
  </React.StrictMode>
);
