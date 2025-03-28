import { getMovies } from '@/api/getMovies';
import { create } from 'zustand';
import { Movie } from '../components/movieSchema';
import { devtools } from 'zustand/middleware';

type MoviesStore = {
    moviesItems: Array<Movie>;
    isLoading: boolean;
    isError: boolean;
    isFilter: boolean;
    addItems: () => Promise<void>;
    addItem: (movie: Movie) => void;
    setFilter: (flag: boolean) => void;
    getItem: (id: string | number) => Movie | undefined;
    reactItem: (id: string, reaction: 'like' | 'dislike') => void;
};

export const useMoviesStore = create<MoviesStore>()(
    devtools((set, get) => ({
        moviesItems: [],
        isLoading: true,
        isError: false,
        isFilter: false,
        setFilter: (flag: boolean) => {
            set((state) => ({
                ...state,
                isFilter: flag,
            }));
        },
        addItems: async () => {
            try {
                const items = await getMovies();
                if (items instanceof Error) {
                    throw items;
                }
                const addedItems = items.map((item) => ({
                    ...item,
                    like: false,
                }));
                set((state) => ({
                    ...state,
                    moviesItems: addedItems,
                    isLoading: false,
                }));
            } catch (e: unknown) {
                console.warn(e);
                set((state) => ({ ...state, isError: true, isLoading: false }));
            }
        },
        getItem: (id: string | number) => {
            return get().moviesItems.find((item) => item.id === String(id));
        },
        addItem: (movie: Movie) => {
            set((state) => ({
                ...state,
                moviesItems: [...state.moviesItems, movie],
            }));
        },
        reactItem: (id: string, reaction: 'like' | 'dislike') => {
            const items = get().moviesItems;
            const _item = items.find((item) => item.id === id);
            console.log(_item, typeof id);
            items.find((item) => {
                console.log(
                    item.id,
                    item.id === id,
                    item.id === String(id),
                    String(id),
                );
                return item.id === id;
            });
            if (!_item) {
                return;
            }
            if (reaction === 'dislike') {
                set((state) => ({
                    ...state,
                    moviesItems: items.filter((item) => item.id !== _item.id),
                }));

                return;
            }
            if (reaction === 'like') {
                set((state) => ({
                    ...state,
                    moviesItems: items.map((item) => {
                        if (item.id === _item.id) {
                            const likedItem = item;
                            likedItem.like = true;
                            return likedItem;
                        }
                        return item;
                    }),
                }));
            }
        },
    })),
);
