"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Book from "@/types/Book"
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Container from "@/components/CenteredContainer"
import Heading from "@/components/Heading"
import BookFrame from "@/components/BookContainer"
import BookHeading from "@/components/BookHeading"
import { BookContainer } from "@/components/BookContainerStyle";



export default function BookDetail({ params}: PageProps) {
    const [book, setBook] = useState<Book | null>(null);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const Redirect = (page: string) => {
      router.push(page);
  };
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
        <Container>
          <Heading color="red">{error}</Heading>
            <br></br>
          <Button type="button" size="large" color="blue" onClick={() => Redirect("/books")}>Go back</Button>
        </Container>

    )
    if(book == null)
    return(
      <Container>
        <Heading>Loading screen TBD</Heading>
      </Container>
        )
  return (
    
    <Container>
      <Heading>Book</Heading>
        <BookFrame size="big">
          <BookHeading><b>Title:</b> {book.title}</BookHeading>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Genre:</b> {book.genre}</p>
          <p><b>Published:</b> {book.published}</p>
          <p><b>Description: </b>{book.description}</p>
        </BookFrame>
        <Button type="button" size="large" color="blue" onClick={() => Redirect("/books")}>Go back to your ReadList</Button>
    </Container>
    )
}

