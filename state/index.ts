import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  credits: number;
  prizes: Prize[];
  tasks: Task[];
}

export const useGlobalState = create<GlobalState>()(
  persist(
    (): GlobalState => ({
      credits: 0,
      prizes: [],
      tasks: [],
    }),
    {
      name: "task-roulette",
      skipHydration: true,
    }
  )
);
