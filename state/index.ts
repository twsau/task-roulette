import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";

interface GlobalState {
  credits: number;
  prizes: Prize[];
  tasks: Task[];
}

export const useGlobalState = create<GlobalState>()(
  persist(
    (): GlobalState => ({
      credits: 0,
      prizes: [
        { id: uuid(), text: "Tasty treat" },
        { id: uuid(), text: "5 min break" },
        { id: uuid(), text: "15 min break" },
      ],
      tasks: [],
    }),
    {
      name: "task-roulette",
      skipHydration: true,
    }
  )
);
