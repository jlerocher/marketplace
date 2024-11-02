import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80"
          alt="404 Illustration"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-md mb-8">
        Oops! It seems like you've ventured into uncharted territory. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/search">
            <Search className="mr-2 h-4 w-4" />
            Search Products
          </Link>
        </Button>
      </div>
    </div>
  );
}