import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  tasks: Task[];
}

export const useGlobalState = create<GlobalState>()(
  persist(
    (): GlobalState => ({
      tasks: [],
    }),
    {
      name: "task-roulette",
      skipHydration: true,
    }
  )
);
