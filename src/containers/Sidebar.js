import React from "react";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { _nav } from "./_nav";

const Sidebar = () => {
  // const dispatch = useDispatch()
  // const show = useSelector(state => state.sidebarShow)

  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
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
    // <CSidebar
    //   show={true}
    //   // onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    // >
    //   <CSidebarBrand className="d-md-down-none" to="/">
    //     <CIcon
    //       className="c-sidebar-brand-full"
    //       name="logo-negative"
    //       height={35}
    //     />
    //     <CIcon
    //       className="c-sidebar-brand-minimized"
    //       name="sygnet"
    //       height={35}
    //     />
    //   </CSidebarBrand>
    //   <CSidebarNav>
    //     <CCreateElement
    //       items={_nav}
    //       components={{
    //         CSidebarNavDivider,
    //         CSidebarNavDropdown,
    //         CSidebarNavItem,
    //         CSidebarNavTitle
    //       }}
    //     />
    //   </CSidebarNav>
    //   <CSidebarMinimizer className="c-d-md-down-none" />
    // </CSidebar>
  );
};

export { Sidebar };
