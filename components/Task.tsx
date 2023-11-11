import { toggleTask } from "@/state/actions/toggleTask";
import { Button } from "./ui/button";
import { CheckIcon } from "@radix-ui/react-icons";

export const Task: React.FC<Task> = (task) => (
  <Button
    className="flex w-full justify-between p-5"
    key={`task-${task.id}`}
    onClick={() => toggleTask(task.id)}
    variant="outline"
  >
    {task.text}
    {task.done && <CheckIcon />}
  </Button>
);
