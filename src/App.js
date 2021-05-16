import React, { useContext, useEffect, useState } from "react";
import { RenderRoutes } from "./routes/helpers/renderRoutes";
import { ROUTES, LOGGED_IN_ROUTES } from "./routes/routes";
import { Header, Footer } from "./components/common";
import { Context } from "./HOC/AppHOC";

function App() {
  const [state] = useContext(Context);
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
      <Footer />
    </div>
  );
}

export default App;
