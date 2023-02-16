import Link from 'next/link'
import { useRouter } from 'next/router';
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function Home() {
  const router = useRouter()

  const randomBook = () => {
    const randomBook = getRandomElement(volumes)
    router.push(`/volumes/${randomBook.slug}`)
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link href={'/volumes'}>See volumes</Link>
      <button onClick={() => randomBook()}>Random Book</button>
    </>
  )
}
