import { useGlobalState } from "..";

export const setTasks = (tasks: Task[]) => useGlobalState.setState({ tasks });
