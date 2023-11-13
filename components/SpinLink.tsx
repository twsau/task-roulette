"use client";

import { useGlobalState } from "@/state";
import Link from "next/link";
import { Button } from "./ui/button";

export const SpinLink: React.FC = () => {
  const { credits } = useGlobalState();

  if (!credits) return null;

  return (
    <Link
      className="animate-in fade-in-50 slide-in-from-bottom-10"
      href="/spin"
    >
      <Button>Spin</Button>
    </Link>
  );
};
