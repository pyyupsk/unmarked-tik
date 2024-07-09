import { create } from 'zustand';

type State = {
    isLoading: boolean;
    // eslint-disable-next-line no-unused-vars
    setIsLoading: (isLoading: boolean) => void;
};

/**
 * A Zustand store for managing the loading state of the application.
 *
 * @returns {State} The state object containing the loading state and a function to update it.
 */
export const useLoading = create<State>((set) => ({
    isLoading: false,
    /**
     * Sets the loading state to the provided value.
     *
     * @param {boolean} isLoading - The new loading state.
     */
    setIsLoading: (isLoading: boolean): void => set({ isLoading }),
}));
