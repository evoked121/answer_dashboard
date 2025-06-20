import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";

const Dashboard = () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full h-full bg-[#161618] text-[#FFFFFF] border-2 border-[#525252] px-[40px] py-[20px]">
        <div className="flex w-full justify-between items-center">
          <div className="text-[32px] text-[#FFFFFF] font-bold">
            Charging Station
          </div>
          <div className="flex space-x-[10px]">
            <button
              className="bg-[#242424] h-[39px] border border-[#5A5A5A] rounded-md px-[4px]"
              onClick={() => setOpenPanel(true)}
            >
              edit variable
            </button>
            <div className="flex bg-[#242424] h-[39px] items-center justify-center px-[11px] border border-[#5A5A5A] rounded-md">
              <UploadOutlined />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement="right"
        closable={false}
        title={
          <div className="pt-[16px] px-[4px] text-[24px] text-[#FFFFFF] font-medium">
            Edit Variable
          </div>
        }
        onClose={() => setOpenPanel(false)}
        open={openPanel}
        width="40vw"
        style={{
          zIndex: 2000,
          backgroundColor: "#0E0D0D",
          borderLeft: "1px solid #525252",
        }}
      >
        <div className="text-[24px] font-medium text-[#FFFFFF]">drawer</div>
      </Drawer>
    </>
  );
};

export default Dashboard;
