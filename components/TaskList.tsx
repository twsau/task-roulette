"use client";

import { useGlobalState } from "@/state";
import { toggleTask } from "@/state/actions/toggleTask";
import { Button } from "./ui/button";
import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { deleteTask } from "@/state/actions/deleteTask";

export const TaskList: React.FC = () => {
  const { tasks } = useGlobalState();

  return (
    <div className="flex flex-col gap-3 px-5">
      {tasks.map((task) => (
        <div
          className="flex items-center gap-5 animate-in fade-in-0 slide-in-from-top-5"
          key={`task-${task.id}`}
        >
          <Button
            className={cn(
              task.done ? "bg-muted text-muted-foreground" : "",
              "flex w-full justify-between p-5"
            )}
            onClick={() => toggleTask(task.id)}
            variant="outline"
          >
            <span className={task.done ? "line-through" : ""}>{task.text}</span>
            {task.done && <CheckIcon />}
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <TrashIcon />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This task will be permanently
                  deleted.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteTask(task.id)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
    </div>
  );
};
