"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ShoppingCart, User } from "lucide-react";
import { UserNav } from "./user-nav";
import SearchBar from "./search-bar";
import CartSheet from "../cart/cart-sheet";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingCart className="h-6 w-6" />
          <span className="font-bold">Marketplace</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <SearchBar />
          <nav className="flex items-center space-x-2">
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
      </div>
    </header>
  );
}