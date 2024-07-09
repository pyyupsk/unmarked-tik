import { Details } from '@/types/Details';
import { create } from 'zustand';

type State = {
    details: Details;
    // eslint-disable-next-line no-unused-vars
    setDetails: (details: Details) => void;
};

export const useDetails = create<State>((set) => ({
    details: {
        type: 'video',
        thumbnail: '',
        title: '',
        author: {
            id: '',
            unique_id: '',
            nickname: '',
            avatar: '',
        },
        downloads: [],
    },
    setDetails: (details) => set({ details }),
}));
