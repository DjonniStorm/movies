'use client';
import { useMoviesStore } from '@/lib/store/moviesStore';
import React, { type JSX } from 'react';
import { useRouter } from 'next/navigation';
import { ImageComponent } from './Image';
import { Button } from '../ui/Button/Button';

type ProductDescriptionProps = {
    id: string;
};

export const ProductDescription = ({
    id,
}: ProductDescriptionProps): JSX.Element => {
    const { getItem } = useMoviesStore();
    const item = getItem(id);
    const router = useRouter();

    const handleClick = () => {
        router.push('/products');
    };

    if (!item) {
        return (
            <div>
                <p>item with id: {id} not found</p>
                <Button onClick={handleClick} type={'button'}>
                    Назад
                </Button>
            </div>
        );
    }

    const { name, year, description, ageRating, poster } = item;

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex-1 p-10 w-full h-full">
                <div className="border border-black rounded-2xl flex flex-col md:flex-row w-full h-full p-5">
                    <div className="pr-5 md:border-r flex justify-center items-center w-50 md:w-100 overflow-hidden">
                        <ImageComponent
                            src={poster.url}
                            alt={name + 'poster'}
                            width={150}
                            height={200}
                            className="object-cover w-70 h-auto"
                        />
                    </div>
                    <div className="w-full h-full p-5 flex flex-col justify-center gap-y-10">
                        <div className="w-full relative">
                            <h1 className="text-center text-3xl">{name}</h1>
                            <p className="absolute right-1 top-0 text-xl border rounded-xl p-2">
                                {ageRating}+
                            </p>
                            <div className="text-xl">О фильме:</div>
                        </div>
                        <div>
                            <div className="p-2 text-justify">
                                {description}
                            </div>
                            <div>Год выпуска: {year}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Button type={'button'} onClick={handleClick}>
                Назад
            </Button>
        </div>
    );
};
