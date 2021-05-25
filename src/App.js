import React, { useContext, useEffect, useState } from "react";
import { RenderRoutes } from "./routes/helpers/renderRoutes";
import {
  ROUTES,
  LOGGED_IN_ROUTES,
  LOGGED_IN_ROUTES_MENU
} from "./routes/routes";
import { Header, Footer } from "./components/common";
import { Context } from "./HOC/AppHOC";

function App() {
  const [global] = useContext(Context);
  const [routes, setRoutes] = useState({ menu: ROUTES, render: ROUTES });

  useEffect(() => {
    if (global.logged)
      setRoutes({ menu: LOGGED_IN_ROUTES_MENU, render: LOGGED_IN_ROUTES });
    else setRoutes({ menu: ROUTES, render: ROUTES });
  }, [global]);

  return (
    <div className="app_wrapper">
      <div className="header_wrapper">
        <Header routes={routes.menu} />
      </div>

      <RenderRoutes routes={routes.render} />
      <Footer />
    </div>
  );
}

export default App;
