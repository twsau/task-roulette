import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  credits: number;
  tasks: Task[];
}

export const useGlobalState = create<GlobalState>()(
  persist(
    (): GlobalState => ({
      credits: 0,
      tasks: [],
    }),
    {
      name: "task-roulette",
      skipHydration: true,
    }
  )
);
