import BookDetails from "@/Components/BookDetails";
import { useRouter } from "next/router";
import Head from 'next/head'

const Index = () => {
  const router = useRouter();
  const bookSlug = router.query.book

  if (bookSlug === undefined) {
    return null
  }

  return (
    <>
      <Head>
        <title>{bookSlug}</title>
      </Head>
      <BookDetails bookSlug={bookSlug}></BookDetails>
    </>
  )
}

export default Index
