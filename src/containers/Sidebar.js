import React from "react";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Menu theme="light" mode="inline" selectedKeys={[window.location.pathname]}>
      <Menu.Item key="/posts" icon={<AppstoreOutlined />}>
        <Link to="/posts">Posts</Link>
      </Menu.Item>
      <Menu.Item key="/my-posts" icon={<VideoCameraOutlined />}>
        <Link to="/my-posts">My Posts</Link>
      </Menu.Item>
      <Menu.Item key="/profile" icon={<UploadOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="/search" icon={<BarChartOutlined />}>
        <Link to="/search">Find People</Link>
      </Menu.Item>
      <Menu.Item key="/create-post" icon={<CloudOutlined />}>
        <Link to="/create-post">Create Post</Link>
      </Menu.Item>
      <Menu.Item key="/requests" icon={<AppstoreOutlined />}>
        <Link to="/requests">Requests</Link>
      </Menu.Item>
      <Menu.Item key="/connections" icon={<TeamOutlined />}>
        <Link to="/connections">Connection</Link>
      </Menu.Item>
      <Menu.Item key="/logout" icon={<ShopOutlined />}>
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export { Sidebar };
