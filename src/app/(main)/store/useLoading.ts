import { create } from 'zustand';

type State = {
    isLoading: boolean;
    // eslint-disable-next-line no-unused-vars
    setIsLoading: (isLoading: boolean) => void;
};

export const useLoading = create<State>((set) => ({
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
}));
