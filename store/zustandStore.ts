import { create } from "zustand";

interface IAnimationStore {
  isLetsGoButtonVisible: boolean;
  setIsLetsGoButtonVisible: () => void;
}

export const useAnimationStore = create<IAnimationStore>((set) => ({
  isLetsGoButtonVisible: false,
  setIsLetsGoButtonVisible: () => set({ isLetsGoButtonVisible: true }), // Corrected the function
}));
