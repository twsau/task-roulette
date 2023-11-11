"use client";

import { useGlobalState } from "@/state";
import { Task } from "./Task";

export const TaskList: React.FC = () => {
  const { tasks } = useGlobalState();

  return <div className="flex flex-col gap-3 px-5">{tasks.map(Task)}</div>;
};
