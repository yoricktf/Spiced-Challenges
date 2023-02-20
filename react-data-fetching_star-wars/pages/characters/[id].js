import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from 'swr'
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter()
  const id = router.query.id;
  const URL = `https://swapi.dev/api/people/${id}`
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(URL, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
