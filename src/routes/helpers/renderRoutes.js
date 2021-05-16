import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { NotFoundPage } from "../../Pages/notFoundPage";
function RouteWithSubRoutes(route) {
  return (
    <div className="page-wrapper">
      {!route.private ? (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          // For routes that have subroutes
          // render={(props) => (
          //   <route.component {...props} routes={route.routes} />
          // )}
        />
      ) : (
        <PrivateRoute
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      )}
    </div>
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
}
