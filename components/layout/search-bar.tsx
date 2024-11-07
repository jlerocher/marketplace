"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form
            onSubmit={handleSearch}
            className="max-w-md w-full items-center hidden md:flex"
        >
            <Input
                placeholder="Search products..."
                className=""
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
}
