import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/about">Link to About Page</Link>
      </p>
      <p>
        <Link href="/users">Link to Users Page</Link>
      </p>
    </main>
  )
}
