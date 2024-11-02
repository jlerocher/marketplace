import { PrismaClient } from '@prisma/client';
import { products as seedProducts, categories as seedCategories } from '../lib/data';

const prisma = new PrismaClient();

async function main() {
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