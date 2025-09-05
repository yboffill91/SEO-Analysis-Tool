import { URL } from "@/modules/analysis/models/url.type";
import { create } from "zustand";

interface URLStore {
  url: string;
  setUrl: (arg0: string) => void;
}

export const useURLStore = create<URLStore>((set) => ({
  url: "www.tamer.com",
  setUrl: (newUrl) => set({ url: newUrl }),
}));
