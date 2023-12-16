"use client";
import Link from "next/link";
export default function CreatePage(){
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const title = e.currentTarget.titlee.value
        const author = e.currentTarget.author.value
        const genre = e.currentTarget.genre.value
        const published = e.currentTarget.published.value
        const description = e.currentTarget.description.value
        console.log(title, author, genre, published, description)

        await fetch('/api/create', {
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
        })
    };

    return(
        <div>
        <h1>Add a new book to your ReadList</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" type="text" name="titlee" />
            <input placeholder="Author" type="text" name="author" />
            <input placeholder="Genre" type="text" name="genre" />
            <input placeholder="Published Year" type="number" name="published" />
            <textarea placeholder="Description" name="description" />
            <button type="submit">Create</button>
        </form>
        <Link href="/books">Go back to ReadList</Link>
        </div>
    )
}