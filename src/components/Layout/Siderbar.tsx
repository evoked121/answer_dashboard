import React from "react";
import {
  MenuOutlined,
  HomeFilled,
  BellFilled,
  UserOutlined,
  CloudUploadOutlined,
  FileSyncOutlined,
  SettingFilled,
} from "@ant-design/icons";

const Siderbar = () => {
  return (
    <div className="flex flex-1 flex-col h-full w-full items-center justify-between">
      <div className="flex flex-1 flex-col space-y-[40px] items-center pt-[33px]">
        <MenuOutlined style={{ fontSize: 20, color: "#FFFFFF" }} />
        <HomeFilled style={{ fontSize: 20, color: "#FFFFFF" }} />
        <BellFilled style={{ fontSize: 20, color: "#FFFFFF" }} />
        <FileSyncOutlined style={{ fontSize: 20, color: "#FFFFFF" }} />
        <CloudUploadOutlined style={{ fontSize: 20, color: "#FFFFFF" }} />
        <SettingFilled style={{ fontSize: 20, color: "#FFFFFF" }} />
      </div>
      <div className="flex pb-[20px]">
        <UserOutlined style={{ fontSize: 20, color: "#FFFFFF" }} />
      </div>
    </div>
  );
};

export default Siderbar;
