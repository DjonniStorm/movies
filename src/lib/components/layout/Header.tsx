import Link from 'next/link';
import type { JSX } from 'react';

const navLinks = [
    { href: '/products', label: 'Киношки' },
    { href: '/create-product', label: 'Добавить киношку' },
] as const;

export const Header = (): JSX.Element => {
    return (
        <header className="w-full px-4 bg-primary text-secondary">
            <nav>
                <ul className="flex gap-x-5">
                    {navLinks.map(({ href, label }) => (
                        <li
                            key={href}
                            className="p-4 hover:transition hover:bg-secondary hover:text-primary hover:duration-300"
                        >
                            <Link href={href} className="block">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
