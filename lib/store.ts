import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    total: number;
}

/**
 * useCart is a custom hook created using the Zustand library to manage shopping cart state.
 * It persists cart data using the persist middleware providing functionalities for adding,
 * removing, updating item quantities, and clearing the cart.
 *
 * Properties:
 * - items: An array representing the items in the shopping cart. Each item includes its details like id, price, and quantity.
 * - total: A number representing the total cost of all items in the cart.
 *
 * Methods:
 * - addItem(item): Adds an item to the cart. If the item already exists, it increments its quantity.
 * - removeItem(id): Removes an item from the cart by its id.
 * - updateQuantity(id, quantity): Updates the quantity of a specific item by its id.
 * - clearCart(): Clears all items from the cart and resets the total to zero.
 */
export const useCart = create<CartStore>()(
    persist(
        (set, _get) => ({
            items: [],
            total: 0,
            addItem: (item) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (i) => i.id === item.id,
                    );
                    if (existingItem) {
                        return {
                            items: state.items.map((i) =>
                                i.id === item.id
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i,
                            ),
                            total: state.total + item.price,
                        };
                    }
                    return {
                        items: [...state.items, { ...item, quantity: 1 }],
                        total: state.total + item.price,
                    };
                }),
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.id !== id),
                    total:
                        state.total -
                        (state.items.find((i) => i.id === id)?.price || 0) *
                            (state.items.find((i) => i.id === id)?.quantity ||
                                0),
                })),
            updateQuantity: (id, quantity) =>
                set((state) => {
                    const item = state.items.find((i) => i.id === id);
                    if (!item) return state;
                    const quantityDiff = quantity - item.quantity;
                    return {
                        items: state.items.map((i) =>
                            i.id === id ? { ...i, quantity } : i,
                        ),
                        total: state.total + item.price * quantityDiff,
                    };
                }),
            clearCart: () => set({ items: [], total: 0 }),
        }),
        {
            name: "cart-storage",
        },
    ),
);
