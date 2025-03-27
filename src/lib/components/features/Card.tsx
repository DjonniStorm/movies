import React, { type JSX } from 'react';
import { Movie } from '../movieSchema';
import Link from 'next/link';
import { ImageComponent } from './Image';
import { Reaction } from './Reaction';

type CardProps = Omit<Movie, 'description' | 'like'> & {
    link: string;
};

export const Card = ({
    id,
    name,
    year,
    shortDescription,
    poster,
    link,
    ageRating,
}: CardProps): JSX.Element => {
    return (
        <div className="">
            <Link href={link}>
                <div className="flex flex-col gap-y-2 p-1 relative w-60 h-80 max-h-[400px] border border-black rounded-lg overflow-hidden">
                    <div className="absolute top-1 right-1 text-sm">
                        {ageRating >= 0 && <p>{ageRating}+</p>}
                    </div>

                    <div className="flex-1 flex flex-col items-center h-full justify-around">
                        <div className="w-full flex justify-center">
                            <ImageComponent
                                src={poster.url}
                                alt={`${name} poster`}
                                width={124}
                                height={292}
                                className="rounded-lg object-cover"
                            />
                        </div>

                        <div className="flex w-full justify-between items-center px-2">
                            <h2
                                className="text-lg font-semibold truncate"
                                title={name}
                            >
                                {name}
                            </h2>
                            <p className="text-sm">{year}</p>
                        </div>
                        <p
                            className="px-2 text-sm line-clamp-2 overflow-hidden text-ellipsis"
                            title={shortDescription}
                        >
                            {shortDescription}
                        </p>
                    </div>
                </div>
            </Link>
            <Reaction id={id} />
        </div>
    );
};
