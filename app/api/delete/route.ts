import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaHelper";

export default async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.body;

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

        const book = await prisma.book.delete({
            where: {
                id,
            },
        });

        return new Response(
            JSON.stringify({
                message: "Book deleted",
                book,
                status: 200,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
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