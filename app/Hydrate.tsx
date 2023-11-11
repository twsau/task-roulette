"use client";

import { useGlobalState } from "@/state";
import { useEffect } from "react";

export const Hydrate = () => {
  useEffect(() => {
    useGlobalState.persist.rehydrate();
  }, []);

  return null;
};
