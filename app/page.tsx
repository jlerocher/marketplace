import Categories from "@/components/home/categories";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import ProductsLoading from "@/components/loading/products-loading";
import { Suspense } from "react";

export default function Home() {
    return (
        <>
            <Hero />
            <div className="container mx-auto px-4 py-8">
                <Categories />
                <Suspense fallback={<ProductsLoading />}>
                    <FeaturedProducts />
                </Suspense>
            </div>
        </>
    );
}
