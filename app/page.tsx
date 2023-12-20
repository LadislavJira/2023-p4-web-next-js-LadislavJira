"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import Container from "@/components/CenteredContainer"
import Heading from "@/components/Heading"


export default function Home() {
  const router = useRouter();
  const Redirect = (page: string) => {
    router.push(page);
};

  return (

    <Container>
      <Heading>Reading list - HomePage</Heading>

        <Button type="button" size="extra-large" color="blue" onClick={() => Redirect("/books")}>Readlist</Button>

        <Button type="button" size="extra-large" color="green" onClick={() => Redirect("/create")}>Create</Button>
    </Container>

  )
}

