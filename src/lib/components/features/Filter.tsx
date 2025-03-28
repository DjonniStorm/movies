'use client';

import type { JSX } from 'react';
import { Filter } from '../ui/Filter';
import { useMoviesStore } from '@/lib/store/moviesStore';
import { cn } from '@/lib/utils';

export const FilterComponent = (): JSX.Element => {
    const { isFilter, setFilter } = useMoviesStore();

    const handleClick = () => {
        setFilter(!isFilter);
    };

    return (
        <div
            className={cn(
                'p-3 border border-black rounded w-fit bg-primary hover:bg-secondary/80 transition active:bg-secondary',
                {
                    'bg-secondary': isFilter,
                },
            )}
            onClick={handleClick}
        >
            <Filter
                width={30}
                height={30}
                color={isFilter ? '#d3d3d3' : '#000'}
                className={cn('transition hover:fill-primary', {
                    'fill-primary': isFilter,
                })}
            />
        </div>
    );
};
