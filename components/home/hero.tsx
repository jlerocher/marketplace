"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[500px] rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Your Ultimate Marketplace
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl">
          Discover unique products from sellers worldwide. Start your shopping
          journey today!
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Button asChild variant="default" size="lg" className="">
            <Link
              href="/products"
              className="flex items-center gap-2 font-bold text-base"
            >
              <ShoppingBag className="h-5 w-5" />
              Start Shopping
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white/10"
          >
            <Link href="/become-seller">Become a Seller</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
