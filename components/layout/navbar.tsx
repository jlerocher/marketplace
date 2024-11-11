"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Heart,
    HelpCircle,
    LogOut,
    Menu,
    Package,
    Settings,
    ShoppingCart,
    User,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import CartSheet from "../cart/cart-sheet";
import SearchBar from "./search-bar";

export default function Navbar() {
    const { data: session } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        {
            icon: <Package className="mr-2 h-4 w-4" />,
            label: "My Orders",
            href: "/orders",
        },
        {
            icon: <Heart className="mr-2 h-4 w-4" />,
            label: "Wishlist",
            href: "/wishlist",
        },
        {
            icon: <Settings className="mr-2 h-4 w-4" />,
            label: "Settings",
            href: "/settings",
        },
        {
            icon: <HelpCircle className="mr-2 h-4 w-4" />,
            label: "Help Center",
            href: "/help",
        },
    ];

    const UserMenu = () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src={session?.user?.image || ""}
                            alt={session?.user?.name || ""}
                        />
                        <AvatarFallback>
                            {session?.user?.name?.[0] || "U"}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {session?.user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {session?.user?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {menuItems.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                        <Link href={item.href} className="flex items-center">
                            {item.icon}
                            {item.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="text-red-600 focus:text-red-600"
                    onSelect={(event) => {
                        event.preventDefault();
                        signOut();
                    }}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <ShoppingCart className="h-6 w-6" />
                            <h1 className="font-bold text-xl hidden sm:inline-block">
                                Marketplace
                            </h1>
                        </Link>
                    </div>

                    <div className="flex-1 px-2 md:px-4 lg:px-6">
                        <SearchBar />
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-4">
                            <ThemeToggle />
                            <CartSheet />
                            {session ? (
                                <UserMenu />
                            ) : (
                                <Button
                                    asChild
                                    variant="default"
                                    className="group"
                                >
                                    <Link href="/auth/signin">
                                        <User className="mr-2 h-4 w-4 group-hover:motion-preset-shake" />
                                        Sign In
                                    </Link>
                                </Button>
                            )}
                        </div>

                        <Sheet
                            open={isMobileMenuOpen}
                            onOpenChange={setIsMobileMenuOpen}
                        >
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] sm:w-[400px]"
                            >
                                <nav className="flex flex-col space-y-4">
                                    <ThemeToggle />
                                    <CartSheet />
                                    {session ? (
                                        <>
                                            <div className="flex items-center space-x-4 px-4 py-2">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage
                                                        src={
                                                            session?.user
                                                                ?.image || ""
                                                        }
                                                        alt={
                                                            session?.user
                                                                ?.name || ""
                                                        }
                                                    />
                                                    <AvatarFallback>
                                                        {session?.user
                                                            ?.name?.[0] || "U"}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-medium">
                                                        {session.user?.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {session.user?.email}
                                                    </p>
                                                </div>
                                            </div>
                                            {menuItems.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className="flex items-center px-4 py-2 text-sm"
                                                >
                                                    {item.icon}
                                                    {item.label}
                                                </Link>
                                            ))}
                                            <Button
                                                variant="destructive"
                                                className="mt-4"
                                                onClick={() => signOut()}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" />
                                                Sign out
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            asChild
                                            variant="default"
                                            className="group"
                                        >
                                            <Link href="/auth/signin">
                                                <User className="mr-2 h-4 w-4 group-hover:motion-preset-shake" />
                                                Sign In
                                            </Link>
                                        </Button>
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
