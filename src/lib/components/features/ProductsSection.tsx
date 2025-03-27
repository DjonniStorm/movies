'use client';

import { useMoviesStore } from '@/lib/store/moviesStore';
import { useEffect, type JSX } from 'react';
import { Card } from './Card';

export const ProductSection = (): JSX.Element => {
    const { moviesItems, isError, addItems } = useMoviesStore();

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

    return (
        <section className="flex-1 px-4 py-6 grid grid-cols-[repeat(auto-fill,240px)] justify-center md:justify-start gap-6">
            {moviesItems.map((movie) => (
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
