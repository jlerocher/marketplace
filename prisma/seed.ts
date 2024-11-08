import { PrismaClient } from "@prisma/client";
import {
    categories as seedCategories,
    products as seedProducts,
} from "../lib/data";

const prisma = new PrismaClient();

async function main() {
    // start by reset products and categories
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});
    // Seed categories
    for (const category of seedCategories) {
        await prisma.category.upsert({
            where: { id: category.id },
            update: {
                name: category.name,
                description: category.description,
                image: category.image,
            },
            create: {
                id: category.id,
                name: category.name,
                description: category.description,
                image: category.image,
            },
        });
    }

    // Seed products
    for (const product of seedProducts) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: {
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                categoryId: product.category,
                inventory: product.inventory,
                rating: product.rating,
                reviewCount: product.reviews,
            },
            create: {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                categoryId: product.category,
                inventory: product.inventory,
                rating: product.rating,
                reviewCount: product.reviews,
            },
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
