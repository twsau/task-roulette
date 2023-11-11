"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { addTask } from "@/state/actions/addTask";

export const Header: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <header className="flex items-center gap-5 p-5">
      <Input
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Do the things..."
        value={newTaskText}
      />
      <Button
        onClick={() => {
          addTask(newTaskText);
          setNewTaskText("");
        }}
      >
        <PlusIcon />
      </Button>
    </header>
  );
};
