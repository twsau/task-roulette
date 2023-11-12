import { useGlobalState } from "@/state";

export const setTasks = (tasks: Task[]) => useGlobalState.setState({ tasks });
