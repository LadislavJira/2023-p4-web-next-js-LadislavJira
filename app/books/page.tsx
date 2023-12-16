"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Book from "@/types/Book"
import Link from "next/link";

export default function Books() {

    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {

        fetch("/api/all")
        .then((response) => response.json())
        .then((data) => {
            setBooks(data)
            if(data.message){
                setError(data.message)
            }
        })
    }, []);


    const goToDetail = (id: number) => {
        router.push(`/books/${id}`);
    };

      const deleteBook = async (id: number) => {
        await fetch('/api/delete', {
            method: "DELETE",
            body: JSON.stringify({
                id
            })
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            if(data.status == 200){
                setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
            }
        })
    };

    if(error != null)
      return(
        <>
        <h1 style={{ color: "red" }}>{error}</h1>
        <br></br>
        <Link href="/">
          Go back
        </Link>
        </>
    )
    if(books.length == 0)
    return(
        <>
        <h1>There aren't any books yet</h1>
        <br></br>
        <Link href="/create">
          Add some!
        </Link>
        </>
        )
    return(
        <>
        <h1>My ReadList</h1>


          {books.map((book) => (
            <div key={book.id}>

            
                <p>{book.title}</p>
                <button onClick={() => goToDetail(book.id)} >Details</button>
                <button onClick={() => deleteBook(book.id)} >Delete</button>
            </div>
          ))}

        <br></br>
        <Link href="/create">
          Add some more!
        </Link>
        <br></br>
        <Link href="/">
          Go back
        </Link>
        </>
    )
}
