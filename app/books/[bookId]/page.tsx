"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Book from "@/types/Book"
export default function BookDetail({ params}: PageProps) {
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        fetch(`/api/detail?id=${params.bookId}`)
        .then((response) => response.json())
        .then((data) => {
            setBook(data)
            if (data.message) {
                setError(data.message);
              } else {
                setBook(data);
              }
        })
    }, []);
    console.log(book);
    if(error != null )
    return(
      <>
      <h1 style={{ color: "red" }}>{error}</h1>
      <br></br>
      <Link href="/">
        Go back
      </Link>
      </>
    )
    if(book == null)
    return(
        <>
        <h1>This book doesn`&apos;`t exist</h1>
  
        <Link href="/books">Go back to ReadList</Link>
      </>
        )
  return (
    <>
      <h1>Book</h1>
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Published: {book.published}</p>
          <p>Description: {book.description}</p>
        </div>
      <Link href="/books">Go back to ReadList</Link>
    </>
    )
}

