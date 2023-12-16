"use client";

import Link from "next/link";

export default function Home() {
  return (

    <div >
      <h1>Reading list - HomePage</h1>
      <div>
        <Link href="/books">
          Books
        </Link>
      </div>
      <div>
        <Link href="/create">
          Create
        </Link>
      </div>
    </div>

  )
}

