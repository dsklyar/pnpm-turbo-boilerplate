import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { LibraryStyles } from "ui";
import { createGlobalStyle } from "styled-components";
import { GlobalStyles as TailwindAppStyles } from "twin.macro";

const AppStyles = createGlobalStyle`
  // Custom app global styles here
`;

const GlobalStyles = () => (
  <>
    <LibraryStyles />
    <TailwindAppStyles />
    <AppStyles />
  </>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
