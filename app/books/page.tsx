"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Book from "@/types/Book"
import Link from "next/link";
import Button from "@/components/button";
import Container from "@/components/CenteredContainer"
import Heading from "@/components/Heading"
import BookFrame from "@/components/BookContainer"
import BookHeading from "@/components/BookHeading"

export default function Books() {

    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
        fetch("/api/all")
        .then((response) => response.json())
        .then((data) => {
            setBooks(data)
            if(data.message){
                setError(data.message)
            }
            setSuccess(true);
        })
        
    }, []);


    const goToDetail = (id: number) => {
        router.push(`/books/${id}`);
    };
    const Redirect = (page: string) => {
      router.push(page);
  };
      const deleteBook = async (id: number) => {
        await fetch("/api/delete", {
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
    if(success == false)
      return(
        <Container>
          <Heading>Loading screen TBD</Heading>
        </Container>

    );

    if(error != null)
      return(
        <Container>
          <Heading color="red">{error}</Heading>
          <br></br>
          <Button type="button" size="large" color="black" onClick={() => Redirect("/")}>Go back</Button>
        </Container>
    )
    if(success == true && books.length == 0)
    return(
        <Container>
          <Heading>There aren&apos;t any books yet</Heading>
        <br></br>

          <Button type="button" size="large" color="green" onClick={() => Redirect("/create")}>Create</Button>
        </Container>
        )
    return(
        <>
        <Container>
          <Heading>My ReadList</Heading>


            {books.map((book) => (
              <BookFrame key={book.id}>

              
                  <BookHeading>{book.title}</BookHeading>
                  <div>
                    <Button type="button" size="small" color="blue" onClick={() => goToDetail(book.id)}>Detail</Button>
                    <Button type="button" size="small" color="red" onClick={() => deleteBook(book.id)}>Delete</Button>
                  </div>

              </BookFrame >
            ))}

          <br></br>
          <Button type="button" size="large" color="green" onClick={() => Redirect("/create")}>Create</Button>
          <br></br>

          <Button type="button" size="large" color="black" onClick={() => Redirect("/")}>Go back</Button>
        </Container>
        </>
    )
}
