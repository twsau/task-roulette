"use client";

import { useGlobalState } from "@/state";
import { Task } from "./Task";

export const TaskList: React.FC = () => {
  const { tasks } = useGlobalState();

  return <div>{tasks.map(Task)}</div>;
};
