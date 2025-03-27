import { ProductForm } from '@/lib/components/features/ProductForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'создание киношки',
    description: 'страница /create-product',
};

export default function CreateProductPage() {
    return (
        <main className="flex-1 flex flex-col justify-center items-center">
            <ProductForm />
        </main>
    );
}
