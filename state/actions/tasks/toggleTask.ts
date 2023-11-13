import { useGlobalState } from "@/state";

export const toggleTask = (id: string) =>
  useGlobalState.setState((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ),
  }));
