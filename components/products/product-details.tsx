"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    inventory: number;
    rating: number;
    reviews: number;
}

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <Badge variant="secondary" className="text-sm">
                                <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                                {product.rating}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                                {product.reviews} reviews
                            </span>
                        </div>
                    </div>

                    <p className="text-2xl font-bold">
                        ${product.price.toFixed(2)}
                    </p>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Description</h3>
                        <p className="text-muted-foreground">
                            {product.description}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Availability</h3>
                        <p className="text-muted-foreground">
                            {product.inventory > 0
                                ? `${product.inventory} in stock`
                                : "Out of stock"}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <Button
                            size="lg"
                            className="flex-1"
                            onClick={handleAddToCart}
                            disabled={product.inventory === 0}
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => setIsWishlisted(!isWishlisted)}
                        >
                            <Heart
                                className={`h-4 w-4 ${
                                    isWishlisted
                                        ? "fill-primary text-primary"
                                        : ""
                                }`}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
