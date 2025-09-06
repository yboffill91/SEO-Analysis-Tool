import { useUserStore } from "@/store/userStore";

export const useHasFullAccess = () => {
  const plan = useUserStore((state) => state.plan);
  return plan === "pro";
};
