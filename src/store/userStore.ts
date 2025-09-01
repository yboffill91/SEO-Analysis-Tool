import { create } from "zustand";

interface User {
  userName: string;
  plan: "free" | "pro";
  name: string;
  ocupation: string;
}

export const useUserStore = create<User>(() => ({
  userName: "user",
  name: "Usuario de Prueba",
  ocupation: "Software Ingeneer",
  plan: "free",
}));
