'use client';
import { JSX } from 'react';
import { ButtonProps } from './Button.props';
import { cn } from '@/lib/utils';

export const Button = ({
    type,
    onClick,
    children,
    className = '',
    ...args
}: ButtonProps): JSX.Element => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={cn(
                'max-w-60 w-fit rounded-2xl text-xl bg-primary border-2 border-secondary p-5 hover:bg-primary/10 active:hover:bg-primary/10',
                className,
            )}
            {...args}
        >
            {children}
        </button>
    );
};
