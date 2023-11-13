import { useGlobalState } from "@/state";

export const spendCredit = () =>
  useGlobalState.setState((state) => ({ credits: state.credits - 1 }));
