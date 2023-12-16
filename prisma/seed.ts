import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  // Seed book data
  const book = await prisma.book.create({
    data: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      published: 1960,
      description:
        "To Kill a Mockingbird is a novel by Harper Lee. It was published in 1960 and is a classic of modern American literature. The plot and characters are loosely based on the author's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
    },
  });

  console.log(`Seeded book with id: ${book.id}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });