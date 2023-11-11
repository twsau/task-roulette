import { useGlobalState } from "..";

export const AddTask = (newTask: Task) =>
  useGlobalState.setState((state) => ({ tasks: [...state.tasks, newTask] }));
