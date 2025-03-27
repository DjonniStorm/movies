import type { JSX } from 'react';

type ErrorPage = {
    notFoundRoute: string;
};

export const ErrorPage = ({ notFoundRoute }: ErrorPage): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {notFoundRoute}
        </div>
    );
};
