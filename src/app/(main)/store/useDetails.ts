import { Details } from '@/types/Details';
import { create } from 'zustand';

type State = {
    details: Details;
    // eslint-disable-next-line no-unused-vars
    setDetails: (details: Details) => void;
};

/**
 * Store for details related to the TikTok video or slideshow.
 * @public
 */
export const useDetails = create<State>((set) => ({
    details: {
        type: 'video' as 'video' | 'slideshow',
        thumbnail: '',
        title: '',
        author: {
            id: '',
            unique_id: '',
            nickname: '',
            avatar: '',
        },
        downloads: [] as string[],
    },
    /**
     * Update the details in the store.
     * @public
     * @param details The new details to set.
     * @returns void
     */
    setDetails: (details: Details) => set({ details }),
}));
