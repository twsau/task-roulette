"use client";

import { useGlobalState } from "@/state";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Wheel } from "react-custom-roulette";
import { useState } from "react";
import { ColorWheelIcon } from "@radix-ui/react-icons";

export const Footer: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const { credits, prizes } = useGlobalState();

  const data = prizes.map((prize) => ({ option: prize.text }));
  const numLoser = Math.round(prizes.length / 3);
  for (let i = 0; i < numLoser; i++) {
    data.push({ option: "You Lose" });
  }

  return (
    <footer className="fixed bottom-0 flex w-full justify-between p-5">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button disabled={!credits}>
            <ColorWheelIcon />
            {credits}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <Wheel mustStartSpinning={mustSpin} prizeNumber={1} data={data} />
          <Button onClick={() => setMustSpin(true)}>SPIN</Button>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  );
};
