import { create } from "zustand";

interface GlobalState {
  todos: TODO[];
}

export const useGlobalState = create<GlobalState>()(() => ({
  todos: [],
}));
