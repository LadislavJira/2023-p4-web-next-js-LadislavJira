"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Container from "@/components/CenteredContainer"
import Heading from "@/components/Heading"
import BookFrame from "@/components/BookContainer"
import FormInput  from "@/components/FormInput";
import FormTextarea  from "@/components/FormTextarea";


export default function CreatePage(){
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const title = e.currentTarget.titlee.value
        const author = e.currentTarget.author.value
        const genre = e.currentTarget.genre.value
        const published = e.currentTarget.published.value
        const description = e.currentTarget.description.value
        console.log(title, author, genre, published, description)

        await fetch("/api/create", {
            method: "POST",
            body: JSON.stringify({
                title,
                author,
                genre,
                published,
                description
            })
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
            router.push("/books");
        })
    };

    const router = useRouter();
    const Redirect = (page: string) => {
      router.push(page);
  };

    return(
        <Container>
            <Heading>Add a new book to your ReadList</Heading>
            <form onSubmit={handleSubmit}>
                <BookFrame size="big">
                
                    <FormInput placeholder="Title" type="text" name="titlee" />
                    <FormInput placeholder="Author" type="text" name="author" />
                    <FormInput placeholder="Genre" type="text" name="genre" />
                    <FormInput placeholder="Published Year" type="number" name="published" max={2023} />
                    <FormTextarea placeholder="Description" name="description" />
                    <Button type="submit" size="medium" color="green" onClick={() => {}}>Create</Button>
                </BookFrame>
            </form>
            <Button type="button" size="large" color="blue" onClick={() => Redirect("/books")}>Go back to ReadList</Button>

        </Container>
    )
}