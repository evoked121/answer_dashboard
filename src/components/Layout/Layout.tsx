import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import HeaderComponent from "./Header";

const { Content, Sider, Header } = Layout;

const NavLayout = () => {
  return (
    <Layout className="w-screen h-screen overflow-hidden">
      <Sider
        width={80}
        className="bg-[#000000] border-l-2 border-t-2 border-[#525252] rounded-tl-lg rounded-bl-lg"
      ></Sider>
      <Layout>
        <Header className="bg-[#000000] h-[87px] items-center justify-center border-t-2 border-r-2 border-[#525252] rounded-tr-lg">
          <HeaderComponent />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavLayout;
