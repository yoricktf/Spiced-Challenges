import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function ProductPage() {
  const router = useRouter()
  const id = router.query.id
  const { data, error, isLoading } = useSWR(`/api/products/${id}`)
  console.log(data)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>Products</h1>
      {data.name}
    </div>
  );
}
