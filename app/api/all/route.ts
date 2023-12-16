import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

export async function GET(/*req: NextApiRequest,*/ res: NextApiResponse) {
  try {
    const books = await prisma.book.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        genre: true,
        published: true,
        description: true,
      },
    });

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}