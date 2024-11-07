import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts() {
    const products = await prisma.product.findMany({
        take: 4,
        orderBy: {
            rating: "desc",
        },
    });
    return products;
}

export default async function FeaturedProducts() {
    const products = await getFeaturedProducts();

    return (
        <section className="py-16">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Featured Products
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Discover our handpicked selection of premium products,
                    chosen for their exceptional quality and value.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="group">
                            <Link href={`/products/${product.id}`}>
                                <CardHeader className="p-0">
                                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                        <div className="absolute top-2 right-2">
                                            <Badge
                                                variant="secondary"
                                                className="bg-white/90 backdrop-blur-sm"
                                            >
                                                <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                                                {product.rating}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <CardTitle className="text-lg line-clamp-1">
                                        {product.name}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-4">
                                        <p className="font-bold text-lg">
                                            ${product.price}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {product.reviewCount} reviews
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Button className="w-full group-hover:bg-primary/90">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
