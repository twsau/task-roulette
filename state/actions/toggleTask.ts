import { useGlobalState } from "..";

export const toggleTask = (id: string) =>
  useGlobalState.setState((state) => {
    const task = state.tasks.find((task) => task.id === id);
    if (!task) return state;

    return {
      credits: state.credits + (task.done ? -1 : 1),
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    };
  });
