"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import CartSheet from "../cart/cart-sheet";
import SearchBar from "./search-bar";
import { UserNav } from "./user-nav";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <header className="sticky flex items-center justify-between py-4 top-0 z-50 w-full border-b bg-background/50 px-2 md:px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Link href="/" className="flex items-center space-x-2">
                <ShoppingCart className="h-6 w-6" />
                <h1 className="font-bold text-xl">Marketplace</h1>
            </Link>

            <SearchBar />

            <div className="md:flex hidden items-center space-x-4">
                <nav className="flex items-center justify-between">
                    <ThemeToggle />
                    <CartSheet />
                    {session ? (
                        <UserNav user={session.user} />
                    ) : (
                        <Button asChild variant="ghost">
                            <Link href="/auth/signin">
                                <User className="mr-2 h-4 w-4" />
                                Sign In
                            </Link>
                        </Button>
                    )}
                </nav>
            </div>

            {/* Add mobile menu button */}
            <div className="md:hidden flex">
                <Button variant="outline" className="">
                    <Menu className="h6 w-6" />
                </Button>
            </div>
        </header>
    );
}
