import { useGlobalState } from "@/state";
import { v4 as uuid } from "uuid";

export const addPrize = (text: string) =>
  useGlobalState.setState((state) => ({
    prizes: [...state.prizes, { id: uuid(), text }],
  }));
