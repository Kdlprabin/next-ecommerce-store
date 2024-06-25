import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

async function HomePage() {

    const billboard = await getBillboard("6bff548f-e866-40ad-9132-c410d3362f9a")
    const products = await getProducts({ isFeatured: true })

    return (
        <Container>
            <div className="pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-x-8 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
