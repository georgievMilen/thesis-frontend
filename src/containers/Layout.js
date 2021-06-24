import React from "react";
import { Layout as AntdLayout } from "antd";
import { Footer as FooterComponent } from "../components/common";
import { RenderRoutes } from "../routes/helpers/renderRoutes";
import { Sidebar } from "./Sidebar";

const { Footer, Sider, Content } = AntdLayout;

const styles = {
  sider: {
    background: "white"
  }
};

const Layout = ({ routes }) => {
  return (
    <AntdLayout style={{ height: "100vh" }}>
      <Sider style={styles.sider}>
        <Sidebar />
      </Sider>
      <AntdLayout>
        <Content>
          <div className="body-container">
            <RenderRoutes routes={routes} />
          </div>
        </Content>
        <Footer style={{ padding: 0 }}>
          <FooterComponent />
        </Footer>
      </AntdLayout>
    </AntdLayout>
  );
};

export { Layout };
