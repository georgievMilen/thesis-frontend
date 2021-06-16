import React from "react";
import { Layout } from "./containers/Layout";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routes/routes";

import "./scss/style.scss";

import { LoginPage, SignupPage, NotFoundPage } from "./Pages";

function App() {
  return (
    <Switch>
      <Route path="/login" exact={true} component={LoginPage} />
      <Route path="/signup" exact={true} component={SignupPage} />
      <Route path="/" exact={false} render={() => <Layout routes={ROUTES} />} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
