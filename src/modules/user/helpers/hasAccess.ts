import { useUserStore } from "@/store/userStore";

export const hasFullAccess = () => {
  const plan = useUserStore((state) => state.plan);
  return plan === "pro";
};
