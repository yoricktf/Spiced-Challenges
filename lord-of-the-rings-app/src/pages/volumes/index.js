import { volumes } from "../../../lib/data";
import Link from 'next/link'

const index = () => {
  return (
    <>
      <h2>All Volumes</h2>
      <Link href={'/'}>Home</Link>
      <ol>
        {volumes.map(volume => {
          return (
            <li key={volume.slug}> <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link></li>
          )
        })}
      </ol>
    </>
  )
}

export default index
