import { ProductDescription } from '@/lib/components/features/ProductDescription';
import type { Metadata } from 'next';

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export const metadata: Metadata = {
    title: 'инфо о кино',
    description: 'страница /product/:id',
};

export default async function ProductInfoPage({ params }: Props) {
    const { id } = await params;
    return (
        <main className="flex-1 w-full">
            <ProductDescription id={id} />
        </main>
    );
}
