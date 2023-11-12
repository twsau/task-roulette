"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
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
} from "../ui/alert-dialog";
import { setTasks } from "@/state/actions/tasks/setTasks";
import { Button } from "../ui/button";
import { GearIcon, TrashIcon } from "@radix-ui/react-icons";

export const Menu: React.FC = () => (
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
);
