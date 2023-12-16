import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
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

    return new Response(JSON.stringify(books), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}