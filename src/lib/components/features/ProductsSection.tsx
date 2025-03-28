'use client';

import { useMoviesStore } from '@/lib/store/moviesStore';
import { useEffect, type JSX } from 'react';
import { Card } from './Card';

export const ProductSection = (): JSX.Element => {
    const { moviesItems, isError, isFilter, addItems } = useMoviesStore();

    useEffect(() => {
        if (!moviesItems.length) {
            addItems();
        }
        moviesItems.forEach((item) => console.log(item));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isError) {
        return <p>Error</p>;
    }

    const filteredMovies = isFilter
        ? moviesItems.filter((movie) => movie.like)
        : moviesItems;

    return (
        <section className="flex-1 px-4 py-6 grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-6 max-w-screen-2xl mx-auto">
            {filteredMovies.map((movie) => (
                <Card
                    id={movie.id}
                    key={movie.id}
                    name={movie.name}
                    year={movie.year}
                    shortDescription={movie.shortDescription}
                    ageRating={movie.ageRating}
                    poster={movie.poster}
                    link={`/products/${movie.id}`}
                />
            ))}
        </section>
    );
};
