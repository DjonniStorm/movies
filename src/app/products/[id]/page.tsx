import { CardDescription } from '@/lib/components/features/CardDescription';
import { Metadata } from 'next';

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
            <CardDescription id={parseInt(id)} />
        </main>
    );
}
