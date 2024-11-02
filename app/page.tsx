import { Suspense } from 'react';
import Hero from '@/components/home/hero';
import FeaturedProducts from '@/components/home/featured-products';
import Categories from '@/components/home/categories';
import ProductsLoading from '@/components/loading/products-loading';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <Categories />
      <Suspense fallback={<ProductsLoading />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}