import React from "react";
import { Tooltip, Button } from "antd";
import {
  MenuOutlined,
  HomeFilled,
  BellFilled,
  UserOutlined,
  CloudUploadOutlined,
  FileSyncOutlined,
  SettingFilled,
} from "@ant-design/icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Siderbar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("logout failed:", error);
    }
  };

  const logoutTooltip = (
    <div>
      <Button
        color="default"
        variant="solid"
        onClick={handleLogout}
        className="text-white px-[5px] border-[1px] border-[#FFFFFF]"
      >
        Logout
      </Button>
    </div>
  );

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
        <Tooltip title={logoutTooltip} placement="top">
          <UserOutlined
            style={{ fontSize: 20, color: "#FFFFFF", cursor: "pointer" }}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Siderbar;
