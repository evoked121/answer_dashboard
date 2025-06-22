import React, { useState } from "react";
import {
  UploadOutlined,
  ThunderboltFilled,
  QuestionCircleOutlined,
  UndoOutlined,
  PlusOutlined,
  UpOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import { Drawer } from "antd";
import DrawerContent from "../components/Drawer/Drawer";
import Chart from "../components/Graph/Chart";
import { performanceIndicators } from "../utils/const";
import BrightStar from "../assets/svg/bright-star.svg?url";

const Dashboard = () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full h-full bg-[#161618] text-[#FFFFFF] border-2 border-[#525252] px-[40px] py-[20px] overflow-auto">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-[10px]">
            <ThunderboltFilled style={{ fontSize: 24 }} />
            <div className="text-[32px] text-[#FFFFFF] font-bold">
              Charging Station
            </div>
          </div>
          <div className="flex space-x-[10px]">
            <div className="flex bg-[#242424] h-[39px] items-center justify-center px-[11px] border border-[#5A5A5A] rounded-md cursor-pointer">
              <UndoOutlined />
            </div>
            <button
              className="bg-[#242424] h-[39px] border border-[#5A5A5A] rounded-md px-[4px]"
              onClick={() => setOpenPanel(true)}
            >
              Edit Variables
            </button>
            <div className="flex bg-[#242424] h-[39px] items-center justify-center px-[11px] border border-[#5A5A5A] rounded-md cursor-pointer">
              <UploadOutlined />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-[28px] mb-[8px]">
          <div className="flex items-center space-x-[10px]">
            <img src={BrightStar} alt="icon" className="" />
            <div className="text-[24px] font-semibold text-[#DCFF7FFD] pt-[20px] pb-[20px]">
              Best Scenario Results
            </div>
          </div>
          <div className="flex items-center justify-between rounded-[16px] border-[1px] border-[#C9FF3B] py-[10px] px-[13px] cursor-pointer">
            <UpOutlined style={{ color: "#C9FF3B" }} />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-[17px]">
          <ResultContainer
            title={
              "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles."
            }
          />
          <ResultContainer
            title={
              "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles."
            }
          />
        </div>
        <div className="flex-1 flex flex-row mt-[40px] w-full items-start space-x-[20px]">
          <div className="flex flex-col w-[56%] space-y-[20px]">
            <div className="text-[24px] font-semibold">Graphs</div>
            <Chart />
          </div>
          <div className="flex-1 flex-col space-y-[20px]">
            <div className="flex items-center justify-between">
              <div className="text-[24px] font-semibold">
                Key Performance Indicators
              </div>
              <div className="flex items-center space-x-[5px] bg-[#18181A80] border-[1px] border-[#5A5A5AA1] rounded-md px-[10px] py-[4px] cursor-pointer">
                <div className="text-[#FFFFFF] text-[12px]">Variables</div>
                <PlusOutlined style={{ color: "#FFFFFF" }} />
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-3 items-center">
              {performanceIndicators.map((indicator, id) => {
                return (
                  <Indicator
                    key={id}
                    title={indicator.title}
                    content={indicator.content}
                    index={indicator.index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement="right"
        title={
          <div className="pt-[16px] px-[4px] text-[24px] text-[#FFFFFF] font-medium">
            Edit Variable
          </div>
        }
        closeIcon={
          <CloseOutlined
            style={{ paddingTop: "16px", color: "#FFFFFF", fontSize: 20 }}
          />
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
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Dashboard;

const ResultContainer = (props: { title: string }) => {
  const { title } = props;
  return (
    <div className="flex flex-row justify-between items-center py-[14px] px-[10px] rounded-md text-[16px] font-medium border-[0.5px] border-[#C8E972] bg-[#CCFF0005] text-[#C9FF3B]">
      <span>{title}</span>
      <span className="font-extrabold mb-[3px]">...</span>
    </div>
  );
};

const Indicator = (props: {
  title: string;
  index: string;
  content: string;
}) => {
  const { title, index, content } = props;
  return (
    <div className="flex flex-col px-[20px] py-[20px] bg-[#222324] border-[1px] border-[#525252] w-[48%] rounded-md space-y-[11px]">
      <div className="flex items-center justify-between w-full">
        <div className="text-[#FFFFFF] text-[18px] font-medium">{title}</div>
        <QuestionCircleOutlined />
      </div>
      <div className="text-[#BBBBBB] text-[12px]">{content}</div>
      <div className="pt-[25px] text-[24px] text-[#FFFFFF] font-bold ml-auto">
        {index}
      </div>
    </div>
  );
};
