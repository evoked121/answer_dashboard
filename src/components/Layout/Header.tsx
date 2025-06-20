import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";

const HeaderComponent = () => {
  return (
    <div className="flex flex-row h-full w-full items-center justify-between px-[8px] py-[16px]">
      <div className="flex flex-row items-center space-x-[20px]">
        <div className="text-[#FFFFFF] font-medium">Charging Stations</div>
        <div className="text-[#FFFFFF] font-medium">Fleet Sizing</div>
        <div className="text-[#FFFFFF] font-medium">Parking</div>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBg: "#2C2E334D",
              activeBorderColor: "#5A5A5A",
            },
          },
        }}
      >
        <Input
          prefix={<SearchOutlined style={{ color: "white" }} />}
          style={{ width: 237 }}
          className="text-[#FFFFFF] bg-[#2C2E334D] border-[#5A5A5A]"
        />
      </ConfigProvider>
    </div>
  );
};

export default HeaderComponent;
