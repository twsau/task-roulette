"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GearIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { addTask } from "@/state/actions/addTask";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import { AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog";
import { setTasks } from "@/state/actions/setTasks";

export const Header: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <header className="flex items-center gap-3 p-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <GearIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>task-roulette</SheetTitle>
            <SheetDescription>Menu</SheetDescription>
          </SheetHeader>
          <div className="py-5">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="flex w-full justify-between" variant="ghost">
                  Delete all tasks
                  <TrashIcon className="text-destructive" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => setTasks([])}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </SheetContent>
      </Sheet>
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
    </header>
  );
};
