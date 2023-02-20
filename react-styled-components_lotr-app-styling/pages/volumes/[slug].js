import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import ChevronLeft from '../../public/icons/chevron-left.svg'
import ArrowLeft from '../../public/icons/arrow-left.svg'
import ArrowRight from '../../public/icons/arrow-right.svg'

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;
  console.log(color)

  const StyledBooks = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${color};
  padding: 20px;
  color: white;
`
  const InfoSection = styled.section`
  margin: 15px;
  & > h1 {
    font: var(--font-headline-1);
  }

`


  return (
    <>
      <InfoSection>
        <Link href="/volumes"><ChevronLeft /> All Volumes</Link>
        <h1>{title}</h1>
        <p>{description}</p>
      </InfoSection>
      <StyledBooks>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}<br /> <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledBooks>
      <InfoSection>

        {previousVolume ? (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              <ArrowLeft /> Previous Volume: {previousVolume.title}
            </Link>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} <ArrowRight />
            </Link>
          </div>
        ) : null}
      </InfoSection>
    </>
  );
}
