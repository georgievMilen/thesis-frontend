import React from "react";
import { Footer } from "../components/common";
import { RenderRoutes } from "../routes/helpers/renderRoutes";
import { Sidebar } from "./Sidebar";
const Layout = ({ routes }) => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar />
      <div className="c-wrapper">
        {/* <Header routes={routes} /> */}
        <div className="c-body">
          <RenderRoutes routes={routes} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
