"use client";

import { useGlobalState } from "@/state";
import { Button } from "./ui/button";

export const Footer: React.FC = () => {
  const { credits } = useGlobalState();

  return (
    <footer className="fixed bottom-0 flex w-full justify-between p-5">
      <span>credits: {credits}</span>
      <Button disabled={!credits}>Spin</Button>
    </footer>
  );
};
