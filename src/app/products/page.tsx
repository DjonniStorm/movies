import { ProductSection } from '@/lib/components/features/ProductsSection';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'киношки',
    description: 'страница /product',
};

export default function ProductsPage() {
    return (
        <main className="flex-1 w-full">
            <Suspense fallback={<p>Loading...</p>}>
                <ProductSection />
            </Suspense>
        </main>
    );
}
