"use server";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default async function Hero() {
    return (
        <div className="relative bg-hero min-h-screen w-full bg-cover">
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 pt-24 lg:pt-44 motion-translate-x-in-[0%] motion-translate-y-in-[183%] motion-opacity-in-[0%] motion-duration-[3s] motion-duration-[3s]/opacity">
                <h1 className="text-4xl md:text-6xl font-bold text-white my-10">
                    Welcome to Your Ultimate Marketplace
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl backdrop-blur-sm">
                    Discover unique products from sellers worldwide{" "}
                    <span className="bold italic">at affordable prices</span>.
                    Start your shopping journey today!
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="group"
                    >
                        <Link
                            href="/products"
                            className="flex items-center gap-2 font-bold text-base text-white"
                        >
                            <div className="group-hover:motion-preset-shake">
                                <ShoppingBag className="h-5 w-5" />
                            </div>
                            Start Shopping
                        </Link>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-transparent text-white border-white "
                    >
                        <Link href="/become-seller">Become a Seller</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
