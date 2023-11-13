import { useGlobalState } from "@/state";

export const addCredit = () =>
  useGlobalState.setState((state) => ({ credits: state.credits + 1 }));
