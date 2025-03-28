'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/Button/Button';

export const ReturnComponent = (): React.JSX.Element => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/products');
    };
    return (
        <Button
            onClick={handleClick}
            type="button"
            className="absolute left-10 top-10 z-2"
        >
            Назад
        </Button>
    );
};
