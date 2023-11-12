"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { addTask } from "@/state/actions/tasks/addTask";
import { Input } from "../ui/input";

export const NewTask: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <form className="flex w-full items-center gap-3">
      <Input
        className="h-[42px]"
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Place your bets..."
        value={newTaskText}
      />
      <Button
        className="transition-all"
        disabled={!newTaskText}
        onClick={() => {
          addTask(newTaskText);
          setNewTaskText("");
        }}
      >
        <PlusIcon />
      </Button>
    </form>
  );
};
