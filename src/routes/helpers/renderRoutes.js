import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

function RouteWithSubRoutes(route) {
  return (
    <>
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
    </>
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
