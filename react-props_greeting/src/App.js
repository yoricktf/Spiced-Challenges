import "./styles.css";

export default function App() {
  return <Greeting name='yoz' />;
}

const Greeting = ({ name }) => {
  return (
    <>
      <h1>Hello{name === 'jan' ? ' coach' : name}</h1>
    </>
  )
}
