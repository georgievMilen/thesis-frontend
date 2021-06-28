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
    <Menu theme="light" mode="inline">
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <Link to="/posts">Posts</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to="/my-posts">My Posts</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<BarChartOutlined />}>
        <Link to="/search">Find People</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<CloudOutlined />}>
        <Link to="/create-post">Create Post</Link>
      </Menu.Item>
      <Menu.Item key="6" icon={<AppstoreOutlined />}>
        <Link to="/requests">Requests</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<TeamOutlined />}>
        <Link to="/connections">Connection</Link>
      </Menu.Item>
      <Menu.Item key="8" icon={<ShopOutlined />}>
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export { Sidebar };
