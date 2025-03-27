'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, type JSX } from 'react';

type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
};

export const ImageComponent = ({
    src,
    alt,
    width,
    height,
    className = '',
}: ImageProps): JSX.Element => {
    const [imageUrl, setImageUrl] = useState(() => src || '/bad-image.gif');
    return (
        <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            className={cn(className)}
            onError={(error) => {
                setImageUrl('/bad-image.gif');
                console.log(error);
            }}
        />
    );
};
