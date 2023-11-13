import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

import { Button } from "../../ui/button";
import { GearIcon } from "@radix-ui/react-icons";
import { ResetAll } from "./ResetAll";

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
        <ResetAll />
      </div>
    </SheetContent>
  </Sheet>
);
