import { useGlobalState } from "@/state";

export const removePrize = (id: string) =>
  useGlobalState.setState((state) => ({
    prizes: state.prizes.filter((prize) => prize.id !== id),
  }));
