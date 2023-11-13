"use client";

import { useGlobalState } from "@/state";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "./ui/button";
import { spendCredit } from "@/state/actions/tasks/spendCredit";
import { useRouter } from "next/navigation";

export const Spinner: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<number>(1);
  const { credits, prizes } = useGlobalState();

  const router = useRouter();

  const data: {
    option: string;
    style?: { backgroundColor?: string; textColor?: string };
  }[] = prizes.map((prize) => ({ option: prize.text }));
  const numLoser = Math.round(prizes.length / 3);
  for (let i = 0; i < numLoser; i++) {
    data.push({
      option: "You Lose",
      style: {
        backgroundColor: "hsl(217.2 32.6% 17.5%)",
        textColor: "hsl(215 20.2% 65.1%)",
      },
    });
  }

  const spin = () => {
    setWinner(Math.floor(Math.random() * (data.length - 0 + 1)) + 0);
    setSpinning(true);
    spendCredit();
  };

  return (
    <div className="fixed inset-0 grid place-items-center">
      <Wheel
        backgroundColors={["hsl(210 40% 98%)"]}
        textColors={["hsl(222.2 47.4% 11.2%)"]}
        mustStartSpinning={spinning}
        onStopSpinning={() => setSpinning(false)}
        prizeNumber={winner}
        data={data}
      />
      <div className="flex gap-3">
        <Button disabled={!credits || spinning} onClick={spin}>
          Spin
        </Button>
        <Button disabled={spinning} onClick={router.back}>
          Back
        </Button>
      </div>
    </div>
  );
};
