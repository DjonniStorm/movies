import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    type: 'button' | 'submit';
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}
