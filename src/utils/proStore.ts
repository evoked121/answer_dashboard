import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type VariableInfo = Partial<{
  id: number;
  content: string;
  isSelect: boolean;
}>;

interface State {
  variable1: VariableInfo[];
  variable2: VariableInfo[];
  variable3: VariableInfo[];
}

interface Actions {
  setVariable1: (variable1: VariableInfo[]) => void;
  setVariable2: (variable2: VariableInfo[]) => void;
  setVariable3: (variable3: VariableInfo[]) => void;
}

export const useProjStore = create<State & Actions>()(
  immer((set) => ({
    variable1: [
      { id: 0, content: "Carbon 1", isSelect: false },
      { id: 1, content: "Co2 Distribution", isSelect: false },
      { id: 2, content: "Fleet sizing", isSelect: false },
    ],
    variable2: [
      { id: 0, content: "Parking Rate", isSelect: false },
      { id: 1, content: "Border Rate", isSelect: false },
      { id: 2, content: "Request rate", isSelect: false },
      { id: 3, content: "Variable 1", isSelect: false },
      { id: 4, content: "Variable 1", isSelect: false },
      { id: 5, content: "Variable 1", isSelect: false },
    ],
    variable3: [
      { id: 0, content: "Variable 1", isSelect: false },
      { id: 1, content: "Variable 1", isSelect: false },
      { id: 2, content: "Variable 1", isSelect: false },
    ],
    setVariable1: (variables: VariableInfo[]) => set({ variable1: variables }),
    setVariable2: (variables: VariableInfo[]) => set({ variable2: variables }),
    setVariable3: (variables: VariableInfo[]) => set({ variable3: variables }),
  }))
);
