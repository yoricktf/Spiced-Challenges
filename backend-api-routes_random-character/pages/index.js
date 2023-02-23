import useSWR from "swr";

export default function HomePage() {

  const { data, error, isLoading } = useSWR('/api/random-character')

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>
      <h1>Hello from Next.js!</h1>
      <p>Hi I'm {data.firstName} {data.lastName}, my twitter handle is {data.twitter} and my geohash is {data.geohash}</p>
    </>
  )
}
