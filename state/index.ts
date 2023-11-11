import { create } from "zustand";

interface GlobalState {
  tasks: Task[];
}

export const useGlobalState = create<GlobalState>()(() => ({
  tasks: [],
}));
