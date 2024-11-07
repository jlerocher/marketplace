import ProductDetails from "@/components/products/product-details";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: {
        id: string;
    };
}

async function getProduct(id: string) {
    const product = await prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
        },
    });
    return product;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    return <ProductDetails product={product} />;
}
