"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export const Header: React.FC = () => {
  const [todoText, setTodoText] = useState("");

  return (
    <header className="flex items-center gap-5 p-5">
      <Input
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Do the things..."
        value={todoText}
      />
      <Button
      // onClick={AddTodo action goes here}
      >
        <PlusIcon />
      </Button>
    </header>
  );
};
