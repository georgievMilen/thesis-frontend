import React from "react";
import { RenderRoutes } from "./routes/helpers/renderRoutes";
import { ROUTES } from "./routes/routes";
import { Header } from "./components/common/Header";

function App() {
  return (
    <div className="app_wrapper">
      <div className="header_wrapper">
        <Header />
      </div>
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
