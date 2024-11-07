export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-muted-foreground">
                            Your trusted marketplace for unique products from
                            sellers worldwide.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Contact Us</li>
                            <li>Shipping Policy</li>
                            <li>Returns & Exchanges</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Shop</li>
                            <li>Categories</li>
                            <li>Become a Seller</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to get special offers, free giveaways, and
                            updates.
                        </p>
                    </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Marketplace. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
