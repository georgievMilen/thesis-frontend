import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/app.css";
import "./styles/header.css";
import "./styles/font.css";
import "./styles/form.css";
import "./styles/page.css";
import "./styles/message.css";

import { AppHOC } from "./HOC/AppHOC";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppHOC>
        <App />
      </AppHOC>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
