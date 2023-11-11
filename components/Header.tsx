"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { HamburgerMenuIcon, PlusIcon } from "@radix-ui/react-icons";
import { addTask } from "@/state/actions/addTask";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const Header: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <header className="flex items-center gap-5 p-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <HamburgerMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>task-roulette</SheetTitle>
            <SheetDescription>Menu</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <form className="flex w-full items-center gap-5">
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
    </header>
  );
};
