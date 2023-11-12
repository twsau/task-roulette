import { useGlobalState } from "@/state";

export const deleteTask = (id: string) =>
  useGlobalState.setState((state) => ({
    tasks: state.tasks.filter((task) => task.id !== id),
  }));
