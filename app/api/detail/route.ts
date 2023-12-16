import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

//Type "NextApiRequest" is not a valid type for the function's first argument.
export async function GET(req: any, res: NextApiResponse) {
    try {
        const { id } = req.query;

        if (!id) {
            return new Response(
                JSON.stringify({
                    message: "ID is required",
                    status: 400,
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        const book = await prisma.book.findUnique({
            where: {
                id: Number(id),
            },
            select: {
                id: true,
                title: true,
                author: true,
                genre: true,
                published: true,
                description: true,
            },
        });

        if (!book) {
            return new Response(
                JSON.stringify({
                    message: "Book not found",
                    status: 404,
                }),
                {
                    status: 404,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        }

        return new Response(JSON.stringify(book), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                message: "Server error",
                status: 500,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}