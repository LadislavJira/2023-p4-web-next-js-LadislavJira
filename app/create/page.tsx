"use client";
export default function CreatePage(){
    /*
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = e.currentTarget.email.value
        const username = e.currentTarget.username.value
        const password = e.currentTarget.password.value

        await fetch('/api/register', {
            method: "POST",
            body: JSON.stringify({
                email,
                username,
                password
            })
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message)
        })
    };
*/
    return(
        <div>
        <h1>Add a new book to your ReadList</h1>
        <form /*onSubmit={handleSubmit}*/>
            <input placeholder="Title" type="text" name="title" />
            <input placeholder="Author" type="text" name="author" />
            <input placeholder="Genre" type="text" name="genre" />
            <input placeholder="Published Year" type="number" name="published" />
            <textarea placeholder="Description" name="description" />
            <button type="submit">Create</button>
        </form>
        </div>
    )
}