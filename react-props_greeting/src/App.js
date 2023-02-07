import "./styles.css";

export default function App() {
  return <Greeting name='yoz' />;
}

const Greeting = ({ name }) => {


  return (
    <>
      <h1>{name === 'jan' ? 'hello coach' : name}</h1>

    </>
  )
}
