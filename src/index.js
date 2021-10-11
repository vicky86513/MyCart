import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "./components/context/themeContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);

