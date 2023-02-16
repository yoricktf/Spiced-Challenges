import { volumes } from "../../lib/data";

import Link from 'next/link'
import Image from 'next/image'

const BookDetails = ({ bookSlug }) => {

  let book = volumes.find(volume => volume.slug === bookSlug)

  const length = volumes.length
  const index = volumes.indexOf(book)

  return (
    <>
      <Link href={'/volumes'}>Back</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <div>
      </div>
      <ul>
        {book.books.map(book => {
          return (
            <li key={book.title}>{book.ordinal} - {book.title}</li>
          )
        })}
      </ul>
      <Image src={book.cover} alt={book.title} width={140} height={230}></Image>
      {index !== 0 ? <Link href={`/volumes/${volumes[index - 1].slug}`}>{volumes[index - 1].title}</Link> : ''}
      {index !== length - 1 ? <Link href={`/volumes/${volumes[index + 1].slug}`}>{volumes[index + 1].title}</Link> : ''}
    </>
  )
}

export default BookDetails
