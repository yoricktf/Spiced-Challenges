import useSWR from 'swr'

export default function ProductsPage() {
  const { data, error, isLoading } = useSWR('/api/products')

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>Products</h1>
      <ol>
        {data.map(product => {
          return <li key={product.id}>{product.name}</li>
        })}
      </ol>
    </div>
  );
}
