import { FilterComponent } from '@/lib/components/features/Filter';
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
            <div className="pl-5 pt-5">
                <FilterComponent />
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <ProductSection />
            </Suspense>
        </main>
    );
}
