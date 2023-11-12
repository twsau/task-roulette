import { useGlobalState } from "@/state";
import { v4 as uuid } from "uuid";

export const addTask = (newTaskText: string) =>
  useGlobalState.setState((state) => ({
    tasks: [...state.tasks, { text: newTaskText, done: false, id: uuid() }],
  }));
