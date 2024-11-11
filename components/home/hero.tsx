"use server";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Store } from "lucide-react";
import Link from "next/link";

export default async function Hero() {
    return (
        <div className="relative bg-hero min-h-screen w-full bg-cover">
            <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Your Ultimate{" "}
                        <span className="relative whitespace-nowrap">
                            Marketplace
                        </span>{" "}
                        Experience
                    </h1>

                    <p className="mt-6 text-lg text-card-foreground">
                        Discover a world of unique products from global sellers.
                        Unbeatable prices, endless possibilities.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="min-w-[200px] gap-2"
                        >
                            <Link href="/shop">
                                <ShoppingBag className="h-4 w-4" />
                                Explore Products
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="min-w-[200px] gap-2"
                        >
                            <Link href="/become-seller">
                                <Store className="h-4 w-4" />
                                Start Selling
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                        <div className="flex flex-col">
                            <dt className="text-base font-medium">1M+</dt>
                            <dd className="text-sm">Active Users</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-medium">100K+</dt>
                            <dd className="text-sm">Products</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-medium ">50+</dt>
                            <dd className="text-sm">Countries</dd>
                        </div>
                        <div className="flex flex-col">
                            <dt className="text-base font-medium ">24/7</dt>
                            <dd className="text-sm ">Support</dd>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-2 right-2 text-xs text-white/60">
                Photo by{" "}
                <a
                    href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    className="underline"
                >
                    Kelly Sikkema
                </a>{" "}
                on{" "}
                <a
                    href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    className="underline"
                >
                    Unsplash
                </a>
            </div>
        </div>
    );
}
