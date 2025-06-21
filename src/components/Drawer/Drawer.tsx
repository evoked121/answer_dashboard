import React, { useRef, useState } from "react";
import { SearchOutlined, RedoOutlined, StarFilled } from "@ant-design/icons";
import { ConfigProvider, Input } from "antd";
import { useProjStore } from "../../utils/proStore";

type VariableInfo = Partial<{
  id: number;
  content: string;
  isSelect: boolean;
}>;

const DrawerContent = () => {
  const variable1 = useProjStore((state) => state.variable1);
  const setVariable1 = useProjStore((state) => state.setVariable1);
  const variable2 = useProjStore((state) => state.variable2);
  const setVariable2 = useProjStore((state) => state.setVariable2);
  const variable3 = useProjStore((state) => state.variable3);
  const setVariable3 = useProjStore((state) => state.setVariable3);
  const [hoveredVariable, setHoveredVariable] = useState<VariableInfo | null>(
    null
  );
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <div className="flex flex-col w-full items-center overflow-auto">
      {/**Header */}
      <div className="flex w-full items-center space-x-[5px]">
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
            prefix={<SearchOutlined style={{ color: "white", height: 30 }} />}
            className="text-[#FFFFFF] bg-[#2C2E334D] border-[#5A5A5A]"
          />
        </ConfigProvider>
        <button
          className="flex flex-row items-center space-x-[8px] bg-[#242424] text-[#FFFFFF] h-[39px] border border-[#5A5A5A] rounded-md px-[4px]"
          onClick={() => {}}
        >
          <StarFilled />
          <span>Autofill</span>
        </button>
        <button
          className="flex flex-row items-center space-x-[8px] bg-[#577113] text-[#C9FF3B] h-[39px] border border-[#5A5A5A] rounded-md px-[4px]"
          onClick={() => {}}
        >
          <RedoOutlined />
          <span>Rerun</span>
        </button>
      </div>
      {/**Select variable */}
      <div
        className={`flex flex-col w-full bg-[#161618] mt-[25px] px-[20px] py-[20px] border-[1px] border-[#525252] space-y-[25px] ${
          hoveredVariable ? "rounded-rt-md rounded-lt-md" : "rounded-md"
        }`}
      >
        <VariableSelection
          title="Variable Category 1"
          variables={variable1}
          setVariable={setVariable1}
          onHover={setHoveredVariable}
          hoverTimeout={hoverTimeout}
        />
        <VariableSelection
          title="Variable Category 2"
          variables={variable2}
          setVariable={setVariable2}
          onHover={setHoveredVariable}
          hoverTimeout={hoverTimeout}
        />
        <VariableSelection
          title="Variable Category 3"
          variables={variable3}
          setVariable={setVariable3}
          onHover={setHoveredVariable}
          hoverTimeout={hoverTimeout}
        />
      </div>
      {hoveredVariable && (
        <div className="flex flex-col w-full bg-[#222324] border-[1px] border-[#525252] px-[20px] py-[30px] rounded-br-md rounded-bl-md duration-600 ease-in-out">
          <div className="text-[#FFFFFF] font-medium text-[20px]">
            {hoveredVariable.content}
          </div>
          <div className="text-[15px] text-[#BBBBBB] font-normal mt-[15px]">
            But what truly sets Switch apart is its versatility. It can be used
            as a scooter, a bike, or even a skateboard, making it suitable for
            people of all ages. Whether you're a student, a professional, or a
            senior citizen, Switch adapts to your needs and lifestyle.
          </div>
        </div>
      )}
      <div className="flex flex-col w-full space-y-[15px] mt-[18px]">
        <div className="flex flex-col w-full bg-[#222324] border-[1px] border-[#525252] px-[20px] py-[8px] rounded-md">
          <div className="text-[#C8E972] font-medium text-[20px]">
            Primary Variables
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#222324] border-[1px] border-[#525252] px-[20px] py-[8px] rounded-md">
          <div className="text-[#C8E972] font-medium text-[20px]">
            Secondary Variables
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;

const VariableSelection = (props: {
  title: string;
  variables: VariableInfo[];
  setVariable: (v: VariableInfo[]) => void;
  onHover: (v: VariableInfo | null) => void;
  hoverTimeout: React.RefObject<NodeJS.Timeout | null>;
}) => {
  const { title, variables, setVariable, onHover, hoverTimeout } = props;

  const handleSelect = (
    variableList: VariableInfo[],
    setVariable: (v: VariableInfo[]) => void,
    id: number
  ) => {
    const updatedVariables = variableList.map((item) =>
      item.id === id ? { ...item, isSelect: !item.isSelect } : item
    );
    setVariable(updatedVariables);
  };
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-[#D5D5D5] text-[15px] font-medium">{title}</div>
      <div className="flex flex-wrap w-full gap-3 items-center">
        {variables.map((variable, id) => {
          return (
            <div
              className={`${
                variable.isSelect
                  ? "bg-[#577113] border-[0.5px] border-[#C9FF3B] text-[#C8E972FD]"
                  : "bg-[#5959594D] border-[0.5px] border-[#EEEEEE] text-[#FFFFFF]"
              } rounded-3xl px-[10px] py-[5px] cursor-pointer`}
              key={id}
              onMouseEnter={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                hoverTimeout.current = setTimeout(() => {
                  onHover(variable);
                }, 1500);
              }}
              onMouseLeave={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                onHover(null);
              }}
              onClick={() => {
                handleSelect(variables, setVariable, id);
              }}
            >
              <span className="flex items-center">
                {variable.content}
                <StarFilled className="ml-4" style={{ fontSize: "10px" }} />
                <span className="ml-1">{variable.isSelect ? "x" : "+"}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
