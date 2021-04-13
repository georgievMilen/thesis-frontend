import React, { useContext, useEffect, useState } from "react";
import { RenderRoutes } from "./routes/helpers/renderRoutes";
import { ROUTES, LOGGED_IN_ROUTES } from "./routes/routes";
import { Header } from "./components/common/Header";
import { authenticationService } from "./utils";
import { Context } from "./HOC/Store";

function App() {
  const [state, dispatch] = useContext(Context);
  const [routes, setRoutes] = useState(ROUTES);
  useEffect(() => {
    if (state.logged) setRoutes(LOGGED_IN_ROUTES);
    else setRoutes(ROUTES);
  }, [state]);

  return (
    <div className="app_wrapper">
      <div className="header_wrapper">
        <Header routes={routes} />
      </div>

      <RenderRoutes routes={routes} />
    </div>
  );
}

export default App;
