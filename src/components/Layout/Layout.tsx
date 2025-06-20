import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header";

const { Content, Sider, Header } = Layout;

interface IProps {
  children: React.ReactNode;
}

const NavLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout className="w-screen h-screen overflow-hidden">
      <Sider
        width={80}
        className="border-l-2 border-t-2 border-[#FFFFFF] rounded-tl-lg rounded-bl-lg"
      ></Sider>
      <Layout>
        <Header className="h-[87px] items-center justify-center border-t-2 border-r-2 border-[#FFFFFF] rounded-tr-lg rounded-br-lg">
          <HeaderComponent />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default NavLayout;
