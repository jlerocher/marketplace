"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import { CartItem } from "./cart-item";

export default function CartSheet() {
    const { items, total } = useCart();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {items.length > 0 && (
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                            {items.length}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <ScrollArea className="flex-1 -mx-4 px-4">
                        {items.length > 0 ? (
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex h-full items-center justify-center">
                                <p className="text-muted-foreground">
                                    Your cart is empty
                                </p>
                            </div>
                        )}
                    </ScrollArea>
                    {items.length > 0 && (
                        <div className="pt-4">
                            <Separator className="mb-4" />
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Total</span>
                                    <span className="font-semibold">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                                <Button className="w-full">Checkout</Button>
                            </div>
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
