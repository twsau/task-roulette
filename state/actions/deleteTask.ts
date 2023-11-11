import { useGlobalState } from "..";

export const deleteTask = (id: string) =>
  useGlobalState.setState((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  }));
