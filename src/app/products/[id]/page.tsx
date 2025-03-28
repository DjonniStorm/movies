import { getMovies } from '@/api/getMovies';
import { ProductDescription } from '@/lib/components/features/ProductDescription';
import type { Metadata } from 'next';

type Props = {
    params: {
        id: string;
    };
};

export const metadata: Metadata = {
    title: 'инфо о кино',
    description: 'страница /product/:id',
};

export async function generateStaticParams() {
    try {
        const movies = await getMovies();
        if (movies instanceof Error) {
            throw new Error();
        }
        return movies.map((movie) => ({ id: String(movie.id) }));
    } catch {
        return [];
    }
}

export default async function ProductInfoPage({ params }: Props) {
    const { id } = params;
    console.log(id);
    return (
        <main className="flex-1 w-full">
            <ProductDescription id={id} />
        </main>
    );
}
