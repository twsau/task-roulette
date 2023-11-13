"use client";

import { useGlobalState } from "@/state";
import { toggleTask } from "@/state/actions/tasks/toggleTask";
import { Button } from "../ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { SortableList } from "../ui/SortableList";
import { setTasks } from "@/state/actions/tasks/setTasks";
import { DeleteTask } from "./DeleteTask";
import { CashTask } from "./CashTask";

export const TaskList: React.FC = () => {
  const { tasks } = useGlobalState();

  return (
    <SortableList
      items={tasks}
      onChange={setTasks}
      renderItem={(task) => (
        <SortableList.Item id={task.id}>
          <div className="flex items-center gap-3 px-5">
            <SortableList.DragHandle />
            <Button
              className={cn(
                task.done ? "bg-muted text-muted-foreground" : "",
                "flex w-full justify-between p-5"
              )}
              onClick={() => toggleTask(task.id)}
              variant="ghost"
            >
              <span className={task.done ? "line-through" : ""}>
                {task.text}
              </span>
              {task.done && <CheckIcon className="text-green-400" />}
            </Button>
            {task.done ? (
              <CashTask id={task.id} />
            ) : (
              <DeleteTask id={task.id} />
            )}
          </div>
        </SortableList.Item>
      )}
    />
  );
};
