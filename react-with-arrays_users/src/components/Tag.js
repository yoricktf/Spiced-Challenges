import "./Tag.css";

export default function Tag({ tag }) {
  return <li className={`tag ${tag == 'admin' ? 'tag--highlight' : ''}`}> {tag}</li >;
}
