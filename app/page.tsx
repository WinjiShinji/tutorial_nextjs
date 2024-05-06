import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href="/about">Link to About Page</Link>
    </main>
  )
}
