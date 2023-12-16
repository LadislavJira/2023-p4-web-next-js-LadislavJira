import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

//Type "NextApiRequest" is not a valid type for the function's first argument.

export  async function POST(req: any, res: NextApiResponse) {
    try {
      const { title, author, genre, published, description } = await req.body;
  
      if (!title || !author || !genre || !published || !description) {
        return new Response(
          JSON.stringify({
            message: "All fields are required",
            status: 400,
          })
        );
      }
  
      const book = await prisma.book.create({
        data: {
          title,
          author,
          genre,
          published,
          description,
        },
      });
  
      return new Response(
        JSON.stringify({
          message: "Book created",
          book,
          status: 200,
        })
      );
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({
          message: "Server error",
          status: 500,
        })
      );
    }
  }